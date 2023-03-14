import FeaturesSection from '../components/Landing/FeaturesSection';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import Presentation from '../components/Landing/Presentation';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
	const navigate = useNavigate();
	const storedLocation = JSON.parse(localStorage.getItem('addressData'));

	useEffect(() => {
		storedLocation && navigate('/home');
	});

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
