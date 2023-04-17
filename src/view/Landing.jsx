import FeaturesSection from '../components/Landing/FeaturesSection';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import Presentation from '../components/Landing/Presentation';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

const Landing = () => {
	const navigate = useNavigate();
	const user = useUserStore(state => state.user);
	const storedLocation = JSON.parse(localStorage.getItem('addressData'));

	useEffect(() => {
		(storedLocation ?? user.user_address) && navigate('/home');
	});

	return (
		<>
			<Navbar />
			<Presentation locations={user.user_address} />
			<FeaturesSection />
			<Footer />
		</>
	);
};

export default Landing;
