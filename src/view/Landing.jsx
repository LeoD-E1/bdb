import FeaturesSection from '../components/Content/cards/FeaturesSection';
import Navbar from '../components/Header/Navbar';

const Landing = () => {
	return (
		<>
			<Navbar />
			<div className='h-[50vh] w-full bg-accent mb-6'></div>
			<FeaturesSection />
		</>
	);
};

export default Landing;
