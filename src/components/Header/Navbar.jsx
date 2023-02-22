import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { useModalStore } from '../../store/modalStore';
import ProfileDropdown from '../Dashboard/navbar/ProfileDropdown';
import logo from '../../../public/favicon.png';

const Navbar = () => {
	const user = useUserStore(state => state.user);
	const updateVisibility = useModalStore(state => state.updateVisibility);
	const updateModalType = useModalStore(state => state.updateModalType);

	const handleClick = () => {
		updateVisibility(true);
		updateModalType('bars-menu');
	};

	return (
		<>
			<header className='z-10 absolute w-full bg-white text-dark-gray'>
				<div className='layout-container flex justify-between p-2'>
					<section className='flex items-center'>
						<button
							className='flex appearance-none p-1 text-gray-500 lg:hidden mr-3'
							onClick={handleClick}
						>
							<FontAwesomeIcon icon={faBars} className='h-5 w-5 text-gray' />
						</button>

						<img src={logo} alt='bocado-logo' className='hidden lg:block w-7' />
					</section>

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
						<section className='hidden lg:flex'>
							<ProfileDropdown user={user} bgColor='white' />
						</section>
					)}
				</div>
			</header>
		</>
	);
};

export default Navbar;
