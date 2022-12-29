import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowLeft,
	faArrowRight,
	faBell,
	faEnvelope,
	faGear,
} from '@fortawesome/free-solid-svg-icons';
import ProfileDropdown from './ProfileDropdown';

const DashboardNavbar = ({ open, onClose }) => {
	const options = [
		{ icon: faGear, label: 'Settings' },
		{ icon: faEnvelope, label: 'Messages' },
		{ icon: faBell, label: 'Notifications' },
	];
	return (
		<div className='p-2 flex justify-between items-center border-b border-b-[#eee] bg-white '>
			<div className='flex items-center '>
				<FontAwesomeIcon
					className='text-gray text-lg shadow-lg p-2 rounded-tr-lg rounded-br-lg  hover:bg-gray hover:bg-opacity-20'
					onClick={() => onClose(!open)}
					icon={open ? faArrowLeft : faArrowRight}
				/>
				<div className='flex justify-center items-center'>
					<div className='flex items-center ml-3'>
						<input
							type='search'
							className='w-full m-2 py-2 pl-4 pr-4 font-bold border-none bg-lightGrey bg-opacity-70 focus:outline-none rounded-lg text-gray'
							placeholder='Search'
						/>
					</div>
				</div>
			</div>
			<div className='flex items-center justify-around'>
				{options.map((option, i) => (
					<div className='relative' key={i}>
						<FontAwesomeIcon
							className='h-5 w-5 text-gray text-lg p-2 rounded-full hover:bg-gray hover:bg-opacity-20 relative'
							icon={option.icon}
						/>
						<span className='absolute top-0 right-0 h-2 w-2 rounded-full bg-green flex justify-center items-center'></span>
					</div>
				))}
				<div>
					<ProfileDropdown />
				</div>
			</div>
		</div>
	);
};

export default DashboardNavbar;
