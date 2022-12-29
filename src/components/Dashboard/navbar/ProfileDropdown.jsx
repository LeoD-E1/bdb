import { useState } from 'react';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from './Profile';
import ProfileMenu from './ProfileMenu';

const ProfileDropdown = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const dataSrc =
		'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';

	const userName = "Leonardo D'angeli";
	const userProffesion = 'Front-end Developer';

	return (
		<div className='relative inline-block text-left'>
			<div
				className='flex items-center cursor-default'
				onClick={() => setDropdownOpen(!dropdownOpen)}
			>
				<Profile src={dataSrc} name={userName} />

				<FontAwesomeIcon
					className='px-1'
					icon={!dropdownOpen ? faCaretDown : faCaretUp}
				/>
			</div>
			{dropdownOpen && <ProfileMenu />}
		</div>
	);
};

export default ProfileDropdown;
