import { useState } from 'react';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from './Profile';
import ProfileMenu from './ProfileMenu';
import noUser from '../../../assets/images/no-user.png';

const ProfileDropdown = ({ user, bgColor }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const dataSrc = noUser;
	const userName = user.user_name ?? 'unknown';
	const background = `bg-${bgColor}` ?? 'bg-lightGrey';

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
			{dropdownOpen && (
				<div className='absolute z-10 right-0 w-56 rounded-md'>
					<ProfileMenu role={user.role} />
				</div>
			)}
		</div>
	);
};

export default ProfileDropdown;
