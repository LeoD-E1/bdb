import { useState, useEffect } from 'react';
import Hero from './components/Content/Hero';
import Navbar from './components/Header/Navbar';

function App() {
	const fetchPhotos = async () => {
		const url = 'https://jsonplaceholder.typicode.com/photos';
		const resp = await fetch(url);
		const data = await resp.json();
		setPhotos(data.slice(0, 10));
	};

	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		(async () => {
			fetchPhotos();
		})();
	}, []);

	return (
		<div className='App'>
			<Navbar />
			<Hero data={photos} />
		</div>
	);
}

export default App;
