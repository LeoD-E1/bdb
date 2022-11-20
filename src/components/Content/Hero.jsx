import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Pagination, Autoplay, EffectFade } from 'swiper';

import 'swiper/css';

const Hero = ({ data }) => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			effect={'fade'}
			loop={true}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
			}}
			pagination={{
				dynamicBullets: true,
			}}
			modules={[Pagination, EffectFade, Autoplay]}
			onSlideChange={() => console.log('slide change')}
			onSwiper={swiper => console.log(swiper)}
		>
			{data.map(slide => (
				<SwiperSlide key={slide.id}>
					<img src={slide.url} alt={slide.title} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

Hero.propTypes = {
	data: PropTypes.array,
};

export default Hero;
