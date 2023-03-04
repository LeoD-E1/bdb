import {
	faBars,
	faCaretDown,
	faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { useModalStore } from '../../store/modalStore';
import ProfileDropdown from '../Dashboard/navbar/ProfileDropdown';
import logo from '../../../public/favicon.png';
import { useState } from 'react';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const user = useUserStore(state => state.user);
	const updateVisibility = useModalStore(state => state.updateVisibility);
	const updateModalType = useModalStore(state => state.updateModalType);

	const storedLocation = JSON.parse(localStorage.getItem('addressData'));
	const handleClick = () => {
		updateVisibility(true);
		updateModalType('bars-menu');
	};

	const handleAddressClick = () => {
		setOpen(!open);
	};

	return (
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

				<section
					className='flex items-center hover:cursor-default'
					onClick={handleAddressClick}
				>
					<h3 className='font-kanit text-sm md:text-lg text-dark-gray'>
						{storedLocation.locationName ||
							storedLocation.address.slice(0, 15).concat('...')}
					</h3>
					<FontAwesomeIcon
						icon={open ? faCaretUp : faCaretDown}
						className='text-sm'
					/>
				</section>

				{!user.user_id ? (
					<nav className='hidden lg:flex items-center text-md text-gray-800'>
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
	);
};

export default Navbar;
