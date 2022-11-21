import { SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

const Slide = ({ data }) => {
	return (
		<SwiperSlide
			style={{
				backgroundImage: `url(${data.url})`,
				backgroundAttachment: 'fixed',
				backgroundRepeat: 'no-repeat',
				backgroundOrigin: 'center',
				backgroundSize: 'cover',
				backgroundPosition: '100% 50%',
			}}
		>
			<div className='w-full h-full flex justify-start items-center layout-container'>
				<div className='max-w-3xl'>
					<h1 className='text-orange text-6xl font-marker'>
						{data.title.toUpperCase()}
					</h1>
					<br />
					<p className='text-white text-2xl'>
						{' '}
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, eum
						commodi dignissimos pariatur perferendis cumque iusto harum saepe
						quas voluptatibus illo asperiores reiciendis molestias provident
						mollitia vel corporis placeat fugiat.
					</p>
					<br />
					<button className='p-3 bg-orange rounded-lg text-white'>Pedir</button>
				</div>
			</div>
		</SwiperSlide>
	);
};

Slide.propTypes = {
	data: PropTypes.object,
};

export default Slide;
