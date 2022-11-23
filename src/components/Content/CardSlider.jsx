import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import 'swiper/css/pagination';

import { Pagination, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Card from './Card';

const CardSlider = ({ data }) => {
	return (
		<Swiper
			className='h-[50vh] w-full my-10 p-5'
			spaceBetween={30}
			slidesPerView={3}
			effect={'coverflow'}
			loop={true}
			pagination={{
				dynamicBullets: true,
			}}
			modules={[Pagination, EffectCoverflow]}
			onSlideChange={() => console.log('slide change')}
			onSwiper={swiper => console.log(swiper)}
		>
			{data.map(result => (
				<SwiperSlide key={result.id}>
					<Card item={result} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

CardSlider.propTypes = {
	data: PropTypes.array,
};

export default CardSlider;
