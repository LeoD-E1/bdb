import { useState } from 'react';
import {
	useJsApiLoader,
	GoogleMap,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
import Spinner from '../Spinner/Spinner';

const { VITE_APP_GOOGLE_MAPS_API_KEY } = import.meta.env;

const libraries = ['places'];

const Google = ({ address }) => {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: VITE_APP_GOOGLE_MAPS_API_KEY,
		libraries,
	});

	const [center, setCenter] = useState({
		lat: address.geometry.location.lat(),
		lng: address.geometry.location.lng(),
	});
	console.log('🚀 ~ file: Google.jsx:24 ~ Google ~ center:', center);

	const [selectedMarker, setSelectedMarker] = useState(null);
	const [mapZoom] = useState(17);
	return (
		<>
			{!isLoaded ? (
				<main className='h-full w-full flex justify-center items-center'>
					<Spinner />
				</main>
			) : (
				<main className='h-full flex'>
					<div className='relative flex-grow '>
						<GoogleMap
							center={center}
							zoom={mapZoom}
							mapContainerStyle={{ width: '100%', height: '100%' }}
							options={{
								zoomControl: true,
								streetViewControl: false,
								mapTypeControl: false,
								fullscreenControl: true,
							}}
							onClick={event => {
								setSelectedMarker(null);
								setCenter({
									lat: event.latLng.lat(),
									lng: event.latLng.lng(),
								});
							}}
						>
							<Marker position={center} />
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
