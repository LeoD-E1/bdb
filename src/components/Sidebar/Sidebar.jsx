import React, { useState } from 'react';
import * as icon from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
	const [open, setOpen] = useState(false);

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
			className={`flex flex-col h-screen p-3 shadow-lg ${
				open ? 'w-60' : 'w-20'
			}`}
		>
			<div className='p-y-3'>
				<FontAwesomeIcon
					onClick={() => setOpen(!open)}
					icon={
						open ? icon['faArrowAltCircleLeft'] : icon['faArrowAltCircleRight']
					}
				/>
				{open && (
					<div className='flex items-center'>
						<h2 className='text-xl font-bold'>Dashboard</h2>
					</div>
				)}
				<div className='flex-1'>
					<ul className='pt-2 pb-4 space-y-1 text-sm'>
						{places.map((place, i) => (
							<li key={i} className='rounded-sm'>
								<a
									href={place.path}
									className='flex items-center p-2 space-x-3 rounded-md'
								>
									<FontAwesomeIcon icon={place.icon} />
									{open && <span>{place.name}</span>}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
