import { useState } from 'react';

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
			<header className='z-10 w-full bg-white'>
				<div className='mx-auto flex max-w-7xl items-center justify-between p-4'>
					<div className='flex items-center space-x-2'>
						<button className='flex appearance-none p-1 text-gray-500 md:hidden'>
							<svg
								className='h-6 w-6'
								fill='currentcolor'
								viewBox='0 0 256 256'
							>
								<line
									x1='40'
									y1='128'
									x2='216'
									y2='128'
									fill='none'
									stroke='currentcolor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='24'
								></line>
								<line
									x1='40'
									y1='64'
									x2='216'
									y2='64'
									fill='none'
									stroke='currentcolor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='24'
								></line>
								<line
									x1='40'
									y1='192'
									x2='216'
									y2='192'
									fill='none'
									stroke='currentcolor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='24'
								></line>
							</svg>
						</button>
						<a href='#'>
							<h1 className='text-3xl'>Logo</h1>
						</a>
					</div>
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
					<nav className='flex items-center space-x-1 text-md font-medium text-gray-800'>
						<a href='#' className=' p-3 transition hover:bg-gray-100'>
							Login
						</a>
						<a href='#' className='p-3 transition'>
							Sign Up
						</a>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Navbar;
