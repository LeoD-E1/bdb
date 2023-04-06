import { Link } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { useModalStore } from '../../store/modalStore';
import ProfileDropdown from '../Dashboard/navbar/ProfileDropdown';
import logo from '../../../public/favicon.png';
import {
	IconUser,
	IconShoppingCart,
	IconMenu2,
	IconCaretDown,
} from '@tabler/icons-react';

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
			<div className='flex justify-between px-4 items-center'>
				<section className='flex justify-center'>
					<button
						className='flex appearance-none p-1 text-gray-500 lg:hidden mr-3'
						onClick={handleClick}
					>
						<IconMenu2 className=' text-black  hover:text-green' />
					</button>

					<img src={logo} alt='bdb-logo' className='hidden lg:block w-7 ml-4' />
				</section>

				{storedLocation && (
					<section
						className='flex hover:cursor-default items-center hover:text-green'
						onClick={handleAddressClick}
					>
						<h3 className='font-kanit text-sm md:text-md text-dark-gray'>
							{storedLocation?.locationName ||
								storedLocation?.formatted_address.split(',')[0]}
						</h3>
						<IconCaretDown className='text-sm mx-1 w-5 h-5' />
					</section>
				)}

				<nav className='flex text-md text-gray-800 items-center'>
					{!user.user_id ? (
						<Link
							to='/login'
							className='p-5 transition flex items-center hover:text-green'
						>
							<IconUser width={25} height={25} className='md:mx-1' />
							<span className='hidden lg:flex'>Ingreso</span>
						</Link>
					) : (
						<section className='hidden lg:flex'>
							<ProfileDropdown user={user} bgColor='white' />
						</section>
					)}
					<Link to='/cart' className=''>
						<IconShoppingCart
							width={25}
							height={25}
							className='m-2 rounded-full hover:rounded-full transition hover:text-green'
						/>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
