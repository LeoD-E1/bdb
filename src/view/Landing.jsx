import FeaturesSection from '../components/Landing/FeaturesSection';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import Presentation from '../components/Landing/Presentation';

const Landing = () => {
	return (
		<>
			<Navbar />
			<Presentation />
			<FeaturesSection />
			<Footer />
		</>
	);
};

export default Landing;
