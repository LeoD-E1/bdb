import { useState } from 'react';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from './Profile';
import ProfileMenu from './ProfileMenu';

const ProfileDropdown = ({ user, bgColor }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const dataSrc =
		// user.image ??
		'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';

	const userName = user.user_name ?? "Leonardo D'angeli";
	const background = bgColor ? `bg-${bgColor}` : 'bg-lightGrey';

	return (
		<div className='relative inline-block text-left'>
			<div
				className={`flex items-center cursor-default rounded-full p-0.5 lg:${background}`}
				onClick={() => setDropdownOpen(!dropdownOpen)}
			>
				<Profile src={dataSrc} name={userName} />

				<FontAwesomeIcon
					className='px-1 hidden lg:block text-gray-400'
					icon={!dropdownOpen ? faCaretDown : faCaretUp}
				/>
			</div>
			{dropdownOpen && <ProfileMenu name={userName} role={user.role_id} />}
		</div>
	);
};

export default ProfileDropdown;
