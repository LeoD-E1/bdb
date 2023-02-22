import Profile from '../Dashboard/navbar/Profile';
import ProfileMenu from '../Dashboard/navbar/ProfileMenu';
import { useUserStore } from '../../store/userStore';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from '../../store/modalStore';

const BarsMenu = () => {
	const dataSrc =
		// user.image ??
		'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';

	const user = useUserStore(state => state.user);
	const updateVisibility = useModalStore(state => state.updateVisibility);
	const navigate = useNavigate();

	const handleClick = to => {
		navigate(to);
		updateVisibility(false);
	};

	return (
		<div className='fixed max-w-sm w-full h-[100vh] bg-white p-5 lg:hidden'>
			{user.user_id !== null ? (
				<div className='relative'>
					<Profile
						name={user.user_name}
						src={dataSrc}
						description={user.email}
					/>
					<ProfileMenu
						role={user.role_id}
						showModalAction={arg => updateVisibility(arg)}
					/>
				</div>
			) : (
				<nav className='text-md text-gray-800'>
					<button
						className=' p-3 transition hover:bg-gray-100 rounded-lg'
						onClick={() => handleClick('/login')}
					>
						Login
					</button>
					<button
						className='p-3 transition hover:bg-gray-100 rounded-lg'
						onClick={() => handleClick('/signup')}
					>
						Sign Up
					</button>
				</nav>
			)}
		</div>
	);
};

export default BarsMenu;
