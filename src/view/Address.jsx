import { useEffect } from 'react';
import Navbar from '../components/Header/Navbar';

import { useNavigate } from 'react-router-dom';
import Google from '../components/Map/Google';

const Address = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// find out if any address is already in the web
		const address = JSON.parse(localStorage.getItem('addressData'));
		if (address) {
			navigate('/home');
		}
	}, []);

	return (
		<>
			<main className='h-screen'>
				<Navbar />
				<div className='h-96 w-80 '>
					<Google />
				</div>
			</main>
		</>
	);
};

export default Address;
