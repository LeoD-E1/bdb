import { useState } from 'react';
import {
	useJsApiLoader,
	GoogleMap,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
import Spinner from '../Spinner/Spinner';
import AddressForm from './AddressForm';

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

	console.log('render');

	const [center, setCenter] = useState(coord);

	const [selectedMarker, setSelectedMarker] = useState(null);
	const [mapZoom, setMapZoom] = useState(15);

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

	return (
		<>
			{!isLoaded ? (
				<main className='h-full w-full flex justify-center items-center'>
					<Spinner />
				</main>
			) : (
				<main className='h-full flex'>
					<div className='relative flex-grow '>
						<div className='w-full flex justify-center'>
							<AddressForm
								center={center}
								cleanFn={cleanSearch}
								coord={coord}
								onSubmit={onSubmit}
							/>
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
				</main>
			)}
		</>
	);
};

export default Google;
