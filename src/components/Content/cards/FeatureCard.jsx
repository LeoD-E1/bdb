const FeatureCard = ({ item }) => {
	return (
		<li className='hover:shadow-lg hover:-translate-y-5 duration-300'>
			<article className='w-full h-full lg:max-w-[348px] flex lg:flex-col'>
				<img
					src={item.imageUrl}
					alt=''
					className='hidden sm:block object-cover w-full max-w-[200px] md:max-w-full md:max-h-[330px] aspect-square'
				/>
				<div
					className='p-8 lg:h-[50%] rounded-xl sm:rounded-none'
					style={{ background: item.bgColor }}
				>
					<h2 className='text-lg md:text-2xl text-white text-center pb-5 font-semibold'>
						{item.title}
					</h2>
					<p className='text-sm text-center text-white md:text-md'>
						{item.description}
					</p>
				</div>
			</article>
		</li>
	);
};

export default FeatureCard;
