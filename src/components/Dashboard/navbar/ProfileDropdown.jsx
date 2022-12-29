import { useState } from 'react';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileDropdown = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<div className='relative inline-block text-left'>
			<div
				className='flex items-center cursor-default'
				onClick={() => setDropdownOpen(!dropdownOpen)}
			>
				<img
					className='object-cover mx-2 rounded-full h-10 w-10'
					src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
					alt='avatar'
				/>
				<div className='hidden lg:flex'>
					<h6>Rafael Marquez</h6>
					<span className='px-1'>
						<FontAwesomeIcon icon={!dropdownOpen ? faCaretDown : faCaretUp} />
					</span>
				</div>
			</div>
			{dropdownOpen && (
				<div
					className='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
					role='menu'
					aria-orientation='vertical'
					aria-labelledby='menu-button'
					tabIndex='-1'
				>
					<div className='py-1' role='none'>
						<a
							href='#'
							className='text-gray-700 block px-4 py-2 text-sm'
							role='menuitem'
							tabIndex='-1'
							id='menu-item-0'
						>
							Edit
						</a>
						<a
							href='#'
							className='text-gray-700 block px-4 py-2 text-sm'
							role='menuitem'
							tabIndex='-1'
							id='menu-item-1'
						>
							Duplicate
						</a>
					</div>
					<div className='py-1' role='none'>
						<a
							href='#'
							className='text-gray-700 block px-4 py-2 text-sm'
							role='menuitem'
							tabIndex='-1'
							id='menu-item-2'
						>
							Archive
						</a>
						<a
							href='#'
							className='text-gray-700 block px-4 py-2 text-sm'
							role='menuitem'
							tabIndex='-1'
							id='menu-item-3'
						>
							Move
						</a>
					</div>
					<div className='py-1' role='none'>
						<a
							href='#'
							className='text-gray-700 block px-4 py-2 text-sm'
							role='menuitem'
							tabIndex='-1'
							id='menu-item-4'
						>
							Share
						</a>
						<a
							href='#'
							className='text-gray-700 block px-4 py-2 text-sm'
							role='menuitem'
							tabIndex='-1'
							id='menu-item-5'
						>
							Add to favorites
						</a>
					</div>
					<div className='py-1' role='none'>
						<a
							href='#'
							className='text-gray-700 block px-4 py-2 text-sm'
							role='menuitem'
							tabIndex='-1'
							id='menu-item-6'
						>
							Delete
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProfileDropdown;
