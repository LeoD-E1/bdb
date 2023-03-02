import { useState } from 'react';
import Navbar from '../components/Header/Navbar';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import Spinner from '../components/Spinner/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const { VITE_APP_GOOGLE_MAPS_API_KEY } = import.meta.env;
const libraries = ['places'];

const Address = () => {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: VITE_APP_GOOGLE_MAPS_API_KEY,
		libraries,
	});

	const [searchText, setSearchText] = useState('');

	function handleSearchTextChange(event) {
		setSearchText(event.target.value);
	}

	function handleSearchButtonClick() {
		console.log(`Buscando dirección: ${searchText}`);
	}

	return (
		<>
			{!isLoaded ? (
				<div className='loader-div'>
					<Spinner />
				</div>
			) : (
				<>
					<Navbar />
					<div className='relative justify-center items-center h-screen w-full bg-hamburger bg-cover'>
						<div className='absolute w-full h-screen flex justify-center items-center bg-opacity-40 bg-black'>
							<div className='flex flex-col max-w-lg w-full px-4'>
								<h1 className='text-3xl font-bold mb-4 text-white'>
									Veamos que hay cerca tuyo
								</h1>
								<div className='relative'>
									<Autocomplete key={'autocompleteKey'}>
										<input
											type='text'
											placeholder='Ingresa una dirección'
											value={searchText}
											onChange={handleSearchTextChange}
											className='w-full py-2 pl-10 pr-4 border border-gray-400 rounded-md focus:outline-none focus:border-accent'
										/>
									</Autocomplete>
									<div className='absolute top-0 left-0 flex justify-center items-center h-full w-10'>
										<FontAwesomeIcon
											icon={faMagnifyingGlass}
											className='w-4 h-4 text-gray-400'
										/>
									</div>
								</div>
								<button
									onClick={handleSearchButtonClick}
									className='mt-4 px-4 py-2 bg-accent text-white rounded-md hover:bg-blue-600 transition-colors duration-150'
								>
									Buscar
								</button>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Address;
