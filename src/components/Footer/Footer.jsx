const Footer = () => {
	return (
		<>
			<footer
				className='text-center text-white'
				style={{ backgroundColor: '#0a4275' }}
			>
				<div className='container p-6'>
					<div className=''>
						<p className='flex justify-center items-center'>
							<span className='mr-4'>Register for free</span>
							<button
								type='button'
								className='inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
							>
								Sign up!
							</button>
						</p>
					</div>
				</div>

				<div
					className='text-center p-4'
					style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
				>
					© 2021 Copyright:
					<a className='text-white' href='https://leoda-dev.vercel.app/'>
						Leoda
					</a>
				</div>
			</footer>
		</>
	);
};

export default Footer;
