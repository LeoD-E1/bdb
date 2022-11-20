const Navbar = () => {
	return (
		<div className='flex justify-start sm:justify-between flex-col sm:flex-row'>
			<div>
				<p className='text-3xl font-bold'>
					Foo<span className='text-green-800'>di</span>e
				</p>
			</div>
			<div>
				<ul className='flex flex-row space-x-4 justify-start sm:justify-center items-center'>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Menu</a>
					</li>
					<li>
						<a href='#'>Service</a>
					</li>
					<li>
						<a href='#'>About Us</a>
					</li>
					<li>
						<a
							href='#'
							className='bg-gray-200 text-gray-900 py-2 inline-flex justify-center items-center px-4 rounded-lg hover:bg-gray-300 hover:text-gray-800'
						>
							Create Account
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
