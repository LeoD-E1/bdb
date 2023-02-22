import Profile from '../Dashboard/navbar/Profile';
import ProfileMenu from '../Dashboard/navbar/ProfileMenu';
import { useUserStore } from '../../store/userStore';

const BarsMenu = () => {
	const dataSrc =
		// user.image ??
		'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';

	const user = useUserStore(state => state.user);

	return (
		<div className='fixed max-w-sm w-full h-[100vh] bg-white p-5'>
			<div className='relative bg-accent '>
				<Profile
					name={user.first_name}
					src={dataSrc}
					description={user.email}
				/>
				<ProfileMenu role={user.role_id} />
			</div>
		</div>
	);
};

export default BarsMenu;
