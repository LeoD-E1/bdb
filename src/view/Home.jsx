import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardSlider from '../components/Content/CardSlider';
import Offers from '../components/Content/Offers';
import Slider from '../components/Content/Slider';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar';
import Spinner from '../components/Spinner/Spinner';
import { useFetch } from '../Hook/useFetch';
import NearBusiness from './NearBusiness';

const Home = () => {
	const { data, error, loading } = useFetch('/images.json');
	const navigate = useNavigate();
	const address = JSON.parse(localStorage.getItem('addressData'));

	useEffect(() => {
		!address && navigate('/');
	}, []);

	if (loading) {
		return (
			<div className='flex justify-center items-center w-100 h-[100vh]'>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return (
			<div className='flex justify-center items-center w-100 h-[100vh]'>
				<h1 className='font-marker text-5xl text-orange'>
					{' '}
					Error, Algo salio mal
				</h1>
			</div>
		);
	}

	return (
		<div className='App'>
			<>
				<Navbar />
				<Slider data={data} />
				<NearBusiness />
				{data && (
					<>
						<CardSlider data={data} title='Nuestra recomendacion' />
						<Offers data={data} title='Promos mas vendidas' />
					</>
				)}
				<Footer />
			</>
		</div>
	);
};

export default Home;
