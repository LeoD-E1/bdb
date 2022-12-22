import React, { useState } from 'react';
import * as icon from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const [open, setOpen] = useState(true);

	const places = [
		{
			name: 'Dashboard',
			icon: icon['faAddressBook'],
			path: '/dashboard',
		},
		{
			name: 'Settings',
			icon: icon['faAddressBook'],
			path: '/settings',
		},
		{
			name: 'Tables',
			icon: icon['faAddressBook'],
			path: '/tables',
		},
		{
			name: 'Map',
			icon: icon['faAddressBook'],
			path: '/map',
		},
		{
			name: 'Login',
			icon: icon['faAddressBook'],
			path: '/Login',
		},
		{
			name: 'Page',
			icon: icon['faAddressBook'],
			path: '/landing',
		},
	];

	return (
		<div
			className={`flex flex-col relative h-screen text-white bg-accent p-3 shadow-lg ${
				open ? 'w-60' : 'w-20'
			}`}
		>
			<FontAwesomeIcon
				className='absolute top-2 -right-8 text-accent text-xl shadow-lg '
				onClick={() => setOpen(!open)}
				icon={
					open ? icon['faArrowAltCircleLeft'] : icon['faArrowAltCircleRight']
				}
			/>
			<div className='flex items-center justify-around'>
				<h1>LOGO</h1>
				{open && <h2 className='text-xl font-bold'>Dashboard</h2>}
			</div>
			<div className='p-y-3'>
				<ul className='pt-2 pb-4 space-y-1'>
					{places.map((place, i) => (
						<li key={i} className='flex w-full'>
							<Link to={place.path} className='w-full'>
								<div className='flex w-full justify-start items-center p-2 space-x-3 rounded-md hover:bg-gray'>
									<FontAwesomeIcon icon={place.icon} className='text-xl' />
									{open && (
										<span className='text-md text-white'>{place.name}</span>
									)}
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
