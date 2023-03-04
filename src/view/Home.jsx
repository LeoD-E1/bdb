import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardSlider from '../components/Content/CardSlider';
import Offers from '../components/Content/Offers';
import Slider from '../components/Content/Slider';
// import Welcome from '../components/Content/Welcome';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar';
import Spinner from '../components/Spinner/Spinner';
import { useFetch } from '../Hook/useFetch';

const Home = () => {
	const { data, error, loading } = useFetch('/images.json');
	const navigate = useNavigate();

	useEffect(() => {
		// find out if any address is already in the web
		const address = JSON.parse(localStorage.getItem('addressData'));
		if (!address) {
			navigate('/');
		}
	}, []);

	return (
		<div className='App'>
			{error ? (
				<div className='flex justify-center items-center w-100 h-[100vh]'>
					<h1 className='font-marker text-5xl text-orange'>
						{' '}
						Error, Algo salio mal
					</h1>
				</div>
			) : loading ? (
				<div className='flex justify-center items-center w-100 h-[100vh]'>
					<Spinner />
				</div>
			) : (
				<>
					<Navbar />
					<Slider data={data} />
					{/* <Welcome /> */}
					<CardSlider data={data} title='Nuestra recomendacion' />
					<Offers data={data} title='Promos mas vendidas' />
					<Footer />
				</>
			)}
		</div>
	);
};

export default Home;
