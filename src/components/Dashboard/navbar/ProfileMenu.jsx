import { Link, useNavigate, useLocation } from 'react-router-dom';

import {
	faGear,
	faQuestionCircle,
	faArrowRightFromBracket,
	faChartLine,
	faUser,
	faLocationDot,
	faClipboardList,
	faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUserStore } from '../../../store/userStore';

const ProfileMenu = ({ role = 2 }) => {
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
			title: 'Mis direcciones',
			to: '/addresses',
			icon: faLocationDot,
			requireOwner: false,
		},
		{
			title: 'Mis pedidos',
			to: '/orders',
			icon: faClipboardList,
			requireOwner: false,
		},
		{
			title: 'Mis favoritos',
			to: '/favorites',
			icon: faHeart,
			requireOwner: false,
		},
		{
			title: 'Configuracion',
			to: '/settings',
			icon: faGear,
			requireOwner: false,
		},
		{
			title: 'Mi perfil',
			to: '/profile',
			icon: faUser,
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
		<div className='my-2 w-full rounded-b-md bg-white'>
			<div className='mb-3'>
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
	);
};

export default ProfileMenu;
