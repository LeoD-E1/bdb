import { useState } from 'react';
import {
	useJsApiLoader,
	Autocomplete,
	GoogleMap,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const { VITE_APP_GOOGLE_MAPS_API_KEY } = import.meta.env;
const coord = {
	lat: -34.65344,
	lng: -58.61975,
};

const Google = () => {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: VITE_APP_GOOGLE_MAPS_API_KEY,
		libraries: ['places'],
	});

	const [center, setCenter] = useState(coord);

	const [selectedMarker, setSelectedMarker] = useState(null);
	const [mapZoom, setMapZoom] = useState(15);

	const { handleSubmit, register } = useForm();

	const navigate = useNavigate();

	const onSubmit = data => {
		const address = data.address;
		const geocoder = new window.google.maps.Geocoder();
		geocoder.geocode({ address }, (results, status) => {
			if (status === 'OK') {
				setCenter({
					lat: results[0].geometry.location.lat(),
					lng: results[0].geometry.location.lng(),
				});
				setMapZoom(17);
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	};

	function cleanSearch() {
		setCenter(coord);
		setMapZoom(15);
	}

	const addAddress = data => {
		if (data.address === '') return Error('Invalid address');
		localStorage.setItem('addressData', JSON.stringify(data));
		navigate('/home');
	};

	return (
		<>
			{!isLoaded ? (
				<div className='h-full w-full flex justify-center items-center'>
					<Spinner />
				</div>
			) : (
				<div className='h-full flex'>
					<div className='relative flex-grow '>
						<div className='w-full flex justify-center'>
							<form
								onSubmit={
									center.lat !== coord.lat
										? handleSubmit(addAddress)
										: handleSubmit(onSubmit)
								}
								className='mx-2 z-10 absolute bg-white top-5 md:flex md:flex-col p-2 rounded-lg'
							>
								<Autocomplete>
									<input
										{...register('address')}
										type='text'
										placeholder='Dirección'
										className='w-full px-2 py-1 mt-1 border border-gray-100 rounded-sm focus:outline-none focus:border-accent'
									/>
								</Autocomplete>

								<div className='grid grid-cols-2 gap-1'>
									<input
										{...register('extra')}
										placeholder='dep, timbre, etc'
										className='w-full mt-1 px-2 py-1 border border-gray-100 rounded-sm focus:outline-none focus:border-accent'
										type='text'
									/>

									<input
										{...register('locationName')}
										placeholder='Nombre de la dirección'
										className='w-full mt-1 px-2 py-1 border border-gray-100 rounded-sm focus:outline-none focus:border-accent'
										type='text'
									/>
								</div>

								<div className='flex gap-1'>
									<button
										type='submit'
										className='w-full px-3 py-1 my-1 bg-accent text-white rounded-sm hover:bg-blue-600 focus:outline-none focus:bg-blue '
									>
										{center.lat !== coord.lat ? 'Agregar dirección' : 'Buscar'}
									</button>
									{center.lat !== coord.lat && (
										<button
											onClick={cleanSearch}
											className='px-3 py-1 my-1 bg-red text-white rounded-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
										>
											X
										</button>
									)}
								</div>
							</form>
						</div>
						<GoogleMap
							center={center}
							zoom={mapZoom}
							mapContainerStyle={{ width: '100%', height: '100%' }}
							options={{
								zoomControl: false,
								streetViewControl: false,
								mapTypeControl: false,
								fullscreenControl: false,
							}}
							onClick={event => {
								setSelectedMarker(null);
								setCenter({
									lat: event.latLng.lat(),
									lng: event.latLng.lng(),
								});
							}}
						>
							<Marker position={coord} />
							{selectedMarker && (
								<InfoWindow
									position={{
										lat: selectedMarker.lat,
										lng: selectedMarker.lng,
									}}
									onCloseClick={() => setSelectedMarker(null)}
								>
									<div>
										<h2>{selectedMarker.name}</h2>
									</div>
								</InfoWindow>
							)}
						</GoogleMap>
					</div>
				</div>
			)}
		</>
	);
};

export default Google;
