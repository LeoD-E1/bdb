import { useState } from 'react';
import logo from '../../../public/favicon.png';

const Navbar = () => {
	const [links] = useState([
		{
			id: '0',
			title: 'Home',
			url: '/home',
		},
		{
			id: '1',
			title: 'Nosotros',
			url: '/nosotros',
		},
		{
			id: '2',
			title: 'Menu',
			url: '/menu',
		},
		{
			id: '3',
			title: 'Contacto',
			url: '/contacto',
		},
	]);

	return (
		<>
			<header className='z-10 absolute w-full bg-transparent text-white font-kanitExtraBold font- text-xl'>
				<div className='mx-auto flex max-w-7xl items-center justify-between p-4'>
					<a href='#'>
						<h1 className='text-3xl'>Logo</h1>
					</a>
					<nav className='hidden items-center space-x-2 text-md font-medium text-gray-800 md:flex'>
						{links.map(link => (
							<a
								key={link.id}
								href={link.url}
								className='p-3 transition hover:bg-gray-100'
							>
								{link.title}
							</a>
						))}
					</nav>
					<nav className='hidden md:flex items-center space-x-1 text-md font-medium text-gray-800'>
						<a href='#' className=' p-3 transition hover:bg-gray-100'>
							Login
						</a>
						<a href='#' className='p-3 transition'>
							Sign Up
						</a>
					</nav>
					<div className='flex items-center space-x-2'>
						<button className='flex appearance-none p-1 text-gray-500 md:hidden'>
							menu <img src={logo} alt='pizza' style={{ width: 25 }} />
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
