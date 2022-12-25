import React, { useState } from 'react';
import {
	faChartSimple,
	faGear,
	faTable,
	faMap,
	faBell,
	faPager,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ open, onClose }) => {
	console.log('🚀 ~ file: Sidebar.jsx:17 ~ Sidebar ~ open', open);
	// const [open, setOpen] = useState(true);
	const { pathname } = useLocation();

	const places = [
		{
			name: 'Dashboard',
			icon: faChartSimple,
			path: '/dashboard',
		},
		{
			name: 'Settings',
			icon: faGear,
			path: '/settings',
		},
		{
			name: 'Tables',
			icon: faTable,
			path: '/tables',
		},
		{
			name: 'Map',
			icon: faMap,
			path: '/map',
		},
		{
			name: 'Notifications',
			icon: faBell,
			path: '/notifications',
		},
		{
			name: 'Page',
			icon: faPager,
			path: '/landing',
		},
	];

	return (
		<div
			className={`relative h-screen text-white bg-accent font-kanit  shadow-xl ${
				open ? 'w-60' : 'w-20'
			}`}
		>
			<div className='relative flex flex-col justify-around items-center h-[80vh]'>
				<div className='flex items-center justify-between'>
					<h1>LOGO</h1>
					{open && <h2 className='text-xl font-bold'>Dashboard</h2>}
				</div>

				<div>
					<nav>
						<ul>
							{places.map((place, i) => (
								<li key={i}>
									<Link
										to={place.path}
										className={`${
											place.path === pathname && 'bg-darkBlue'
										} flex items-center px-4 py-4 my-2 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-darkBlue dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
									>
										<FontAwesomeIcon icon={place.icon} className='w-5 h-5' />
										{open && (
											<div className='mx-5'>
												<span className='mx-4 text-white'>{place.name}</span>
											</div>
										)}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
			<div className='h-[20vh] flex'>
				<Link to='/profile' className='px-4 flex items-center'>
					<img
						className='object-cover mx-2 rounded-full h-10 w-10'
						src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
						alt='avatar'
					/>
					{open && (
						<span className='mx-2 text-white text-lg dark:text-gray-200'>
							John Doe
						</span>
					)}
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
