import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

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
					spaceBetween={20}
					slidesPerView={4}
					loop={true}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},

						767: {
							slidesPerView: 2,
						},

						991: {
							slidesPerView: 3,
						},
					}}
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination]}
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
