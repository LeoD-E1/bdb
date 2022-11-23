import PropTypes from 'prop-types';

const Card = ({ item }) => {
	console.log('🚀 ~ file: Card.jsx ~ line 4 ~ Card ~ item', item);
	return (
		<div
			className='h-full w-full rounded-xl shadow-xl hover:'
			style={{
				backgroundImage: `url(${item.url})`,
				backgroundAttachment: 'fixed',
				backgroundRepeat: 'no-repeat',
				backgroundOrigin: 'center',
				backgroundSize: 'cover',
				backgroundPosition: '100% 50%',
			}}
		>
			<div className='hidden h-full w-full bg-orange hover:opacity-90 hover:bg-dark-gray'>
				<h1>{item.title}</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
					laudantium atque vero blanditiis delectus porro sunt dignissimos?
					Officia esse, vero repudiandae ex ipsa sapiente itaque! Provident
					totam hic explicabo animi!
				</p>
			</div>
		</div>
	);
};

Card.propTypes = {
	item: PropTypes.object,
};

export default Card;
