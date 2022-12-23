import React, { useState, useRef } from 'react';
import {
	faMagnifyingGlass,
	faArrowLeft,
	faArrowRight,
	faChartSimple,
	faGear,
	faTable,
	faMap,
	faUser,
	faPager,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
	const [open, setOpen] = useState(true);
	const [visible, setVisible] = useState(false);
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
			name: 'Login',
			icon: faUser,
			path: '/Login',
		},
		{
			name: 'Page',
			icon: faPager,
			path: '/landing',
		},
	];

	return (
		<div
			className={`h-screen relative flex flex-col justify-between items-center text-white bg-accent font-kanit p-3 shadow-lg ${
				open ? 'w-60' : 'w-20'
			}`}
		>
			<FontAwesomeIcon
				className='absolute -right-6 top-2 text-white text-lg shadow-lg cursor-pointer p-1 rounded-tr-lg rounded-br-lg bg-accent'
				onClick={() => setOpen(!open)}
				icon={open ? faArrowLeft : faArrowRight}
			/>
			<div className='flex items-center justify-around pb-10'>
				<h1>LOGO</h1>
				{open && <h2 className='text-xl font-bold'>Dashboard</h2>}
			</div>
			<div className='flex justify-center items-start py-5'>
				{open ? (
					<input
						type='search'
						className='w-full py-2 pl-4 pr-4 font-bold bg-transparent border-none bg-gray-light opacity-30 focus:outline-none  rounded-lg text-dark-gray'
						placeholder='Search'
					/>
				) : (
					<div className='w-10 h-10 flex justify-center items-center rounded-full bg-gray-light p-2 opacity-20 hover:cursor-pointer'>
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							className='text-xl'
							onClick={() => setOpen(true)}
						/>
					</div>
				)}
			</div>
			<div className='flex flex-col justify-between flex-1 mt-6'>
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
	);
};

export default Sidebar;
