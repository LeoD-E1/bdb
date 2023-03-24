const CommonBtn = ({ action, title }) => {
	return (
		<button className='mt-5' onClick={action}>
			<div className='relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring'>
				<span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-green group-hover:translate-y-0 group-hover:translate-x-0'></span>

				<span className='relative block px-8 py-3 bg-[#1A2238] text-white border border-current'>
					{title}
				</span>
			</div>
		</button>
	);
};

export default CommonBtn;
