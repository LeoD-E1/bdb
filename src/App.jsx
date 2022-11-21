import { useState, useEffect } from 'react';
import Slider from './components/Content/Slider';
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
			<Slider data={photos} />
		</div>
	);
}

export default App;
