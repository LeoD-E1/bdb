import Profile from '../Dashboard/navbar/Profile';
import ProfileMenu from '../Dashboard/navbar/ProfileMenu';
import { useUserStore } from '../../store/userStore';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from '../../store/modalStore';
import noUser from '../../assets/images/no-user.png';
import CloseModalBtn from '../Content/CloseModalBtn';

const BarsMenu = () => {
	const dataSrc = noUser;

	const user = useUserStore(state => state.user);
	const updateVisibility = useModalStore(state => state.updateVisibility);
	const navigate = useNavigate();

	const handleClick = to => {
		navigate(to);
		updateVisibility(false);
	};

	return (
		<div className='max-w-sm w-full h-[100vh] bg-white p-5 lg:hidden'>
			<CloseModalBtn />
			{user.user_id !== null ? (
				<div className='relative'>
					<Profile
						name={user.user_name}
						src={dataSrc}
						description={user.email}
						size={20}
						col={true}
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
