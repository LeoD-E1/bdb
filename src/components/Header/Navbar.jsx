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
	];

	const user = useUserStore(state => state.user);

	return (
		<>
			<header className='z-10 absolute w-full bg-white text-dark-gray'>
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
							<Link
								to='/login'
								className=' p-3 transition hover:bg-gray-100 rounded-lg'
							>
								Login
							</Link>
							<Link
								to='/signup'
								className='p-3 transition hover:bg-gray-100 rounded-lg'
							>
								Sign Up
							</Link>
						</nav>
					) : (
						<section className='hidden md:flex'>
							<ProfileDropdown user={user} bgColor='white' />
						</section>
					)}
				</div>
			</header>
		</>
	);
};

export default Navbar;
