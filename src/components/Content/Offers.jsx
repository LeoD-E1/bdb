import CardTwo from './CardTwo';
import PropTypes from 'prop-types';

const Offers = ({ data, title }) => {
	return (
		<div className='layout-container'>
			{title && (
				<h2 className='text-3xl font-marker text-black mt-10'> {title} </h2>
			)}
			<div className='grid grid-cols-3 gap-1 '>
				{data.slice(0, 6).map(card => (
					<CardTwo key={card.id} item={card} />
				))}
			</div>
		</div>
	);
};

Offers.propTypes = {
	data: PropTypes.array,
	title: PropTypes.string,
};
export default Offers;
