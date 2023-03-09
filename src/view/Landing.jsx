import FeaturesSection from '../components/Content/cards/FeaturesSection';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { useModalStore } from '../store/modalStore';

const Landing = () => {
	const updateVisibility = useModalStore(state => state.updateVisibility);
	const updateModalType = useModalStore(state => state.updateModalType);

	const handleClick = () => {
		updateVisibility(true);
		updateModalType('choose-address', 'center');
	};
	return (
		<>
			<Navbar />
			<div className='presentation h-[50vh] w-full bg-yellow mb-6 '>
				<article className='flex flex-col justify-center items-center h-full w-full gap-5 px-10'>
					<h1 className='text-4xl text-white text-left'>
						Los mejores restaurantes de la Argentina
					</h1>
					<div className='relative w-full max-w-md p-2'>
						<input
							type='text'
							className='w-full py-2 pl-16 text-gray-700 rounded-md focus:outline-none focus:bg-white'
							placeholder='¿Cuál es tu dirección?'
							onClick={handleClick}
						/>
						<FontAwesomeIcon
							icon={faLocationPin}
							className='w-5 h-6 absolute left-0 px-3 py-2 bg-darkMarinBlue text-white rounded-md focus:outline-none focus:bg-blue-600'
						/>
					</div>
				</article>
			</div>
			<FeaturesSection />
			<Footer />
		</>
	);
};

export default Landing;
