import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';
import { useAddressStore } from '../../store/addressStore';
const { VITE_APP_GOOGLE_MAPS_API_KEY } = import.meta.env;
const libraries = ['places'];

const InputAutocomplete = () => {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: VITE_APP_GOOGLE_MAPS_API_KEY,
		libraries,
	});
	const [searchResult, setSearchResult] = useState('Result: none');

	function onLoad(autocomplete) {
		setSearchResult(autocomplete);
	}

	const setNewAddress = useAddressStore(state => state.setNewAddress);

	function onPlaceChanged() {
		if (searchResult != null) {
			const place = searchResult.getPlace();
			setNewAddress(place);
			const formattedAddress = place.formatted_address;
			console.log(`Formatted Address: ${formattedAddress}`);
		} else {
			alert('Please enter text');
		}
	}

	if (!isLoaded) {
		return <div>Loading...</div>;
	}

	return (
		<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
			<input
				type='search'
				placeholder='Busca calles, ciudades, distritos'
				className='w-full px-2 py-1 mt-1 border-b border-gray-100 rounded-sm outline-none focus:border-accent'
			/>
		</Autocomplete>
	);
};

export default InputAutocomplete;
