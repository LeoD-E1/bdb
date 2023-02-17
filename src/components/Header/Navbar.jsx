import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import ProfileDropdown from '../Dashboard/navbar/ProfileDropdown';

const Navbar = () => {
	const links = [
		{
			id: '0',
			title: 'Inicio',
			url: '/',
		},
		{
			id: '1',
			title: 'Nosotros',
			url: '/nosotros',
		},
		{
			id: '2',
			title: 'Contacto',
			url: '/contacto',
		},
	];

	const user = useUserStore(state => state.user);

	return (
		<>
			<header className='z-10 absolute w-full bg-opacity-20 bg-black text-white'>
				<div className='layout-container flex justify-between p-2'>
					<div className='flex items-center'>
						<button className='flex appearance-none p-1 text-gray-500 md:hidden mr-3'>
							<FontAwesomeIcon icon={faBars} className='h-5 w-5 text-white' />
						</button>
						<a href='#'>
							<h1 className='text-3xl'>Logo</h1>
						</a>
					</div>
					<nav className='hidden items-center text-md md:flex'>
						{links.map(link => (
							<Link
								key={link.id}
								to={link.url}
								className='px-3 transition hover:text-gray-300 font-kanit'
							>
								{link.title}
							</Link>
						))}
					</nav>
					{!user.user_id ? (
						<nav className='hidden md:flex items-center text-md text-gray-800'>
							<Link to='/login' className=' p-3 transition hover:bg-gray-400'>
								Login
							</Link>
							<Link to='/signup' className='p-3 transition hover:bg-gray-400'>
								Sign Up
							</Link>
						</nav>
					) : (
						<section className='hidden md:flex'>
							<ProfileDropdown user={user} bgColor='transparent' />
						</section>
					)}
				</div>
			</header>
		</>
	);
};

export default Navbar;
