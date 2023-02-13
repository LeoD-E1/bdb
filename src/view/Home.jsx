import { useState, useEffect } from 'react';
import CardSlider from '../components/Content/CardSlider';
import Offers from '../components/Content/Offers';
import Slider from '../components/Content/Slider';
// import Welcome from '../components/Content/Welcome';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar';

const Home = () => {
	const [photos, setPhotos] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const fetchPhotos = async () => {
		try {
			const url = '/images.json';
			const resp = await fetch(url);
			const data = await resp.json();
			setPhotos(data.slice(0, 10));
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		(async () => {
			fetchPhotos();
		})();
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
					<h1 className='font-marker text-5xl text-orange'>Cargando...</h1>
				</div>
			) : (
				<>
					<Navbar />
					<Slider data={photos} />
					{/* <Welcome /> */}
					<CardSlider data={photos} title='Nuestra recomendacion' />
					<Offers data={photos} title='Promos mas vendidas' />
					<Footer />
				</>
			)}
		</div>
	);
};

export default Home;
