import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowLeft,
	faArrowRight,
	faMagnifyingGlass,
	faBell,
	faEnvelope,
	faGear,
} from '@fortawesome/free-solid-svg-icons';

const DashboardNavbar = ({ open, onClose }) => {
	return (
		<div className='p-2 flex bg-white justify-between items-center'>
			<div className='flex items-center '>
				<FontAwesomeIcon
					className='text-white text-lg shadow-lg cursor-pointer p-2 rounded-tr-lg rounded-br-lg bg-accent'
					onClick={() => onClose(!open)}
					icon={open ? faArrowLeft : faArrowRight}
				/>
				<div className='flex justify-center items-center'>
					<div className='flex items-center ml-3'>
						<FontAwesomeIcon
							className='text-gray text-lg p-1 rounded-full '
							icon={faMagnifyingGlass}
						/>
						<input
							type='search'
							className='w-full m-2 py-2 pl-4 pr-4 font-bold bg-transparent border-none bg-gray-light opacity-30 focus:outline-none  rounded-lg text-dark-gray'
							placeholder='Search'
						/>
					</div>
				</div>
			</div>
			<div className='flex items-center justify-around'>
				<FontAwesomeIcon
					className='h-5 w-5 text-gray text-lg p-2 rounded-full hover:bg-gray hover:bg-opacity-20'
					icon={faGear}
				/>
				<FontAwesomeIcon
					className='h-5 w-5 text-gray text-lg p-2 rounded-full hover:bg-gray hover:bg-opacity-20'
					icon={faBell}
				/>
				<FontAwesomeIcon
					className='h-5 w-5 text-gray text-lg p-2 rounded-full hover:bg-gray hover:bg-opacity-20'
					icon={faEnvelope}
				/>

				<div>
					<img
						className='object-cover mx-2 rounded-full h-10 w-10'
						src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
						alt='avatar'
					/>
				</div>
			</div>
		</div>
	);
};

export default DashboardNavbar;
