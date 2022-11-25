import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import 'swiper/css/pagination';

import { Pagination, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Card from './Card';

const CardSlider = ({ data, title }) => {
	return (
		<>
			<div className='layout-container'>
				{title && (
					<h2 className='text-3xl font-marker text-black mt-10'>{title}</h2>
				)}
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
			</div>
		</>
	);
};

CardSlider.propTypes = {
	data: PropTypes.array,
	title: PropTypes.string,
};

export default CardSlider;
