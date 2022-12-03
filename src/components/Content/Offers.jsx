import CardTwo from './CardTwo';
import PropTypes from 'prop-types';

const Offers = ({ data, title, stop }) => {
	return (
		<div className='layout-container'>
			{title && (
				<h2 className='text-3xl font-marker text-black mt-10'> {title} </h2>
			)}
			<div className='grid justify-items-center md:justify-items-stretch md:grid-cols-3 gap-3 '>
				{data.slice(0, stop).map(card => (
					<CardTwo key={card.id} item={card} />
				))}
			</div>
			{data.length > stop && (
				<div className='w-100 flex justify-center items-center'>
					<button className='px-7 py-3 bg-orange rounded-lg text-white'>
						{' '}
						mas promos! 3
					</button>
				</div>
			)}
		</div>
	);
};

Offers.propTypes = {
	data: PropTypes.array,
	title: PropTypes.string,
	stop: PropTypes.number,
};
export default Offers;
