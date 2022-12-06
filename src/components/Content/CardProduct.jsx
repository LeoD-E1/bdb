import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const CardTwo = ({ item }) => {
	return (
		<div className='bg-gray-400 antialiased text-gray-900 my-5 max-w-lg'>
			<div>
				<a href='#'>
					<img
						src={item.url}
						alt=' random imgee'
						className='w-full object-cover object-center rounded-lg shadow-md'
					/>
				</a>

				<div className='relative px-4 -mt-10  '>
					<div className='bg-white p-6 rounded-lg shadow-lg'>
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
							<button>
								<FontAwesomeIcon icon={faEnvelope} />
							</button>
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
