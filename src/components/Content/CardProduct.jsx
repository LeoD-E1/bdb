const ProductCard = ({ item }) => {
	return (
		<div className='max-w-md rounded-md overflow-hidden shadow-lg hover:shadow-xl'>
			<div className='relative h-60 bg-white'>
				<img
					className='absolute inset-0 h-full w-full object-cover'
					src={item.thumbnailUrl}
					alt={item.title}
				/>
			</div>
			<div className='opacity-100 px-4 py-2 h-full bg-white'>
				<h2 className='text-md font-semibold font-kanit'>{item.title}</h2>
				<span className='text-sm text-gray-300'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
					aperiam facere porro velit sit, odit eligendi, illum placeat ipsa...
				</span>
				<p className='text-gray-600'>${item.price ?? '300'}</p>
			</div>
		</div>
	);
};

export default ProductCard;
