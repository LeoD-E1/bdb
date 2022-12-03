import PropTypes from 'prop-types';

const Card = ({ item }) => {
	return (
		<div
			className='card rounded-xl shadow-xl hover:cursor-pointer'
			style={{
				backgroundImage: `url(${item.url})`,
				backgroundAttachment: 'fixed',
				backgroundRepeat: 'no-repeat',
				backgroundOrigin: 'center',
				backgroundSize: 'cover',
				backgroundPosition: '100% 50%',
			}}
		>
			<div className='inner-card h-full w-full hover:opacity-60 hover:bg-black rounded-xl p-10'>
				<h1 className='text-2xl text-white py-3'>{item.title}</h1>
				<p className='text-white text-lg'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
					laudantium atque vero blanditiis delectus porro sunt dignissimos?
					Officia esse, vero repudiandae ex ipsa sapiente itaque! Provident
					totam hic explicabo animi!
				</p>
				<h2 className='text-2xl'>$1299</h2>
			</div>
		</div>
	);
};

Card.propTypes = {
	item: PropTypes.object,
};

export default Card;
