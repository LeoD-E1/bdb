import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { useModalStore } from '../../store/modalStore';
import ProfileDropdown from '../Dashboard/navbar/ProfileDropdown';
import logo from '../../../public/favicon.png';
import { IconUser, IconShoppingCart } from '@tabler/icons-react';

const Navbar = () => {
	const user = useUserStore(state => state.user);
	const updateVisibility = useModalStore(state => state.updateVisibility);
	const updateModalType = useModalStore(state => state.updateModalType);

	const storedLocation = JSON.parse(localStorage.getItem('addressData'));
	const handleClick = () => {
		updateVisibility(true);
		updateModalType({ newModalType: 'bars-menu' });
	};

	const handleAddressClick = () => {
		updateVisibility(true);
		updateModalType({ newModalType: 'user-addresses', newJustify: 'center' });
	};

	return (
		<header className='z-10 w-full bg-white text-dark-gray'>
			<div className='flex justify-between p-2'>
				<section className='flex items-center'>
					<button
						className='flex appearance-none p-1 text-gray-500 lg:hidden mr-3'
						onClick={handleClick}
					>
						<FontAwesomeIcon icon={faBars} className='h-5 w-5 text-gray' />
					</button>

					<img src={logo} alt='bdb-logo' className='hidden lg:block w-7' />
				</section>

				{storedLocation && (
					<section
						className='flex items-center hover:cursor-default'
						onClick={handleAddressClick}
					>
						<h3 className='font-kanit text-sm md:text-md text-dark-gray'>
							{storedLocation?.locationName ||
								storedLocation?.formatted_address.slice(0, 25).concat('...')}
						</h3>
						<FontAwesomeIcon icon={faCaretDown} className='text-sm mx-1' />
					</section>
				)}

				{!user.user_id ? (
					<nav className='flex items-center text-md text-gray-800'>
						<Link
							to='/login'
							className='p-2 transition flex items-center hover:text-green'
						>
							<IconUser width={25} height={25} className='md:mx-1' />
							<span className='hidden lg:flex'>Ingreso</span>
						</Link>

						<Link to='/cart' className=''>
							<IconShoppingCart
								width={25}
								height={25}
								className='m-2 rounded-full hover:rounded-full transition hover:text-green'
							/>
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
