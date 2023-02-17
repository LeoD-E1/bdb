import { Link, useNavigate, useLocation } from 'react-router-dom';

import {
	faGear,
	faQuestionCircle,
	faArrowRightFromBracket,
	faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUserStore } from '../../../store/userStore';

const ProfileMenu = ({ name, profession, image, role = 2 }) => {
	const dataSrc =
		image ??
		'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';

	const userName = name ?? 'unknown';
	const userProffesion = profession ?? 'Worker';
	const signOut = useUserStore(state => state.signOut);
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const links = [
		{
			title: 'Tablero',
			to: '/dashboard',
			icon: faChartLine,
			requireOwner: true,
		},
		{
			title: 'Configuraciones',
			to: '/settings',
			icon: faGear,
			requireOwner: false,
		},
		{
			title: 'Ayuda y Soporte',
			to: '/help',
			icon: faQuestionCircle,
			requireOwner: false,
		},
		{
			title: 'Cerrar Sesion',
			icon: faArrowRightFromBracket,
			requireOwner: false,
			action: () => {
				signOut();
				navigate('/login');
			},
		},
	];
	return (
		<>
			<div className='absolute right-0 z-10 my-2 w-56 origin-top-right rounded-md bg-white shadow-lg '>
				<div className='flex items-center justify-center py-3 gap-1'>
					<img
						className='object-cover mx-2 rounded-full h-10 w-10'
						src={dataSrc}
						alt='avatar-user'
					/>
					<div className='flex flex-col'>
						<Link to={'/profile'}>
							<h6 className='font-semibold font-kanit text-md hover:text-accent'>
								{userName}
							</h6>
						</Link>

						<span className='text-sm text-gray font-kanit'>
							{userProffesion}
						</span>
					</div>
				</div>
				<div className='flex justify-center mb-3'>
					<div className='flex flex-col'>
						{links.map((link, index) => (
							<div
								key={index}
								className={`hover:text-accent ${
									role === 2 && link.requireOwner && 'hidden'
								}`}
							>
								{link.action ? (
									<button
										className={`flex items-center p-2 my-1 rounded-md hover:bg-lightGrey text-gray-400 text-sm hover:text-accent`}
										onClick={link.action}
									>
										<FontAwesomeIcon icon={link.icon} className='w-5 h-5' />
										<p className='mx-4'>{link.title}</p>
									</button>
								) : (
									<Link
										to={link.to}
										className={`flex items-center p-2 my-1 rounded-md hover:bg-lightGrey text-gray-400 text-sm hover:text-accent ${
											link.to === pathname && 'bg-gray-100 '
										}`}
									>
										<FontAwesomeIcon icon={link.icon} className='w-5 h-5' />
										<p className='mx-4'>{link.title}</p>
									</Link>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileMenu;
