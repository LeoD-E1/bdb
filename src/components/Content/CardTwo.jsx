import PropTypes from 'prop-types';

const CardTwo = ({ item }) => {
	return (
		<div className='wrapper bg-gray-400 antialiased text-gray-900 my-5'>
			<div>
				<img
					src={item.url}
					alt=' random imgee'
					className='w-full object-cover object-center rounded-lg shadow-md'
				/>

				<div className='relative px-4 -mt-16  '>
					<div className='bg-white p-6 rounded-lg shadow-lg'>
						<div className='flex items-baseline'>
							<span className='bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide'>
								New
							</span>
							<div className='ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider'>
								2 baths &bull; 3 rooms
							</div>
						</div>

						<h4 className='mt-1 text-xl font-semibold uppercase leading-tight truncate'>
							{item.title}
						</h4>

						<div className='mt-1'>
							$1800
							<span className='text-gray-600 text-sm'> /wk</span>
						</div>
						<div className='mt-4'>
							<span className='text-teal-600 text-md font-semibold'>
								4/5 ratings{' '}
							</span>
							<span className='text-sm text-gray-600'>
								(based on 234 ratings)
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

CardTwo.propTypes = {
	item: PropTypes.object,
};

export default CardTwo;
