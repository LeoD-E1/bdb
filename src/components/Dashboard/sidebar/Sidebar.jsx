import React, { useState } from 'react';
import {
	faChartSimple,
	faGear,
	faTable,
	faMap,
	faBell,
	faPager,
	faCaretDown,
	faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import TreeView from './TreeView';

const Sidebar = ({ open }) => {
	const { pathname } = useLocation();
	const [openItems, setOpenItems] = useState([]);

	const places = [
		{
			id: 0,
			name: 'Dashboard',
			icon: faChartSimple,
			path: '/dashboard',
		},
		{
			id: 1,
			name: 'Settings',
			icon: faGear,
			path: '/settings',
			children: [
				{
					id: 11,
					name: 'Customers',
					path: '/settings/customers',
					children: [
						{
							id: 110,
							name: 'Customers',
							path: '/settings/customers',
						},
					],
				},
				{
					id: 12,
					name: 'Products',
					path: '/settings/customers',
				},
			],
		},
		{
			id: 2,
			name: 'Tables',
			icon: faTable,
			path: '/tables',
		},
		{
			id: 3,
			name: 'Map',
			icon: faMap,
			path: '/map',
		},
		{
			id: 4,
			name: 'Notifications',
			icon: faBell,
			path: '/notifications',
		},
		{
			id: 5,
			name: 'Page',
			icon: faPager,
			path: '/landing',
		},
	];

	return (
		<div
			className={`relative h-screen text-white bg-accent font-kanit  ${
				open ? 'w-60' : 'w-20'
			}`}
		>
			<div className='relative flex flex-col justify-around items-center h-[80vh]'>
				<div className='flex items-center justify-between'>
					<h1>LOGO</h1>
					{open && <h2 className='text-xl font-bold'>Dashboard</h2>}
				</div>
				<TreeView items={places} open={open} pathname={pathname} />
				{/* <div>
					{places.map((place, i) => (
						<div key={i}>
							<Link
								to={place.path}
								className={`flex items-center justify-between px-4 py-4 my-2 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-darkBlue dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${
									place.path === pathname && 'bg-darkBlue'
								}`}
							>
								<FontAwesomeIcon icon={place.icon} className='w-5 h-5' />
								{open && (
									<div className='mx-5'>
										<span className='mx-4 text-white'>{place.name}</span>
									</div>
								)}

								{place.children ? (
									<FontAwesomeIcon
										icon={
											openItems.includes(place.id) ? faCaretUp : faCaretDown
										}
										onClick={() => setOpenItems([...openItems, place.id])}
										className='w-4 h-4'
									/>
								) : (
									<div></div>
								)}
							</Link>
						</div>
					))}
				</div> */}
			</div>
		</div>
	);
};

export default Sidebar;
