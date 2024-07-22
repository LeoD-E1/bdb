import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';
import Spinner from '../Spinner/Spinner';

const { VITE_APP_GOOGLE_MAPS_API_KEY } = import.meta.env;
const libraries = ['places'];

const InputAutocomplete = ({ retrieveAddress, label = false, placeholder }) => {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: VITE_APP_GOOGLE_MAPS_API_KEY,
		libraries,
	});
	const [searchResult, setSearchResult] = useState(null);

	function onLoad(autocomplete) {
		setSearchResult(autocomplete);
	}

	function onPlaceChanged() {
		if (searchResult != null) {
			const place = searchResult.getPlace();
			retrieveAddress(place);
		} else {
			alert('Please enter text');
		}
	}

	if (!isLoaded) {
		return <Spinner />;
	}

	return (
		<>
			{label && (
				<label className='text-sm text-black font-kanit '>Dirección</label>
			)}
			<Autocomplete
				onLoad={onLoad}
				onPlaceChanged={onPlaceChanged}
				className='py-2'
			>
				<input
					type='search'
					placeholder={placeholder}
					className='w-full p-4 pr-7 mb-1 text-sm text-gray-500 font-kanit leading-tight focus:outline-none focus:border-accent border-transparent border rounded-lg  bg-lightGrey'
				/>
			</Autocomplete>
		</>
	);
};

export default InputAutocomplete;
