import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Pagination, Autoplay, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ data }) => {
	return (
		<Swiper
			className='h-[100vh] w-full'
			spaceBetween={50}
			slidesPerView={1}
			effect={'fade'}
			loop={true}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			pagination={{
				dynamicBullets: true,
			}}
			modules={[Pagination, EffectFade, Autoplay]}
		>
			{data?.slice(0, 5).map(slide => (
				<SwiperSlide
					key={slide.id}
					style={{
						backgroundImage: `url(${slide.url})`,
						backgroundAttachment: 'fixed',
						backgroundRepeat: 'no-repeat',
						backgroundOrigin: 'center',
						backgroundSize: 'cover',
						objectFit: 'cover',
						backgroundPosition: '100% 50%',
					}}
				>
					<div className='w-full h-full flex justify-start items-center layout-container'>
						<div className='md:max-w-2xl'>
							<h1 className='text-orange text-4xl'>{slide.title}</h1>
							<br />
							<button className='px-7 py-3 bg-orange rounded-lg text-white'>
								Pedir ya!
							</button>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

Slider.propTypes = {
	data: PropTypes.array,
};

export default Slider;
