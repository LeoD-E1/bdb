import Spinner from '../components/Spinner/Spinner';
import { useFetch } from '../Hook/useFetch';
import BusinessCard from './dashboard/BusinessCard';
const { VITE_APP_BASE_URL } = import.meta.env;

const NearBusiness = () => {
	const address = JSON.parse(localStorage.getItem('addressData'));
	const latitude = address.geometry.location.lat;
	const longitude = address.geometry.location.lng;

	const { data, loading, error } = useFetch(
		`${VITE_APP_BASE_URL}/business?lat=${latitude}&lng=${longitude}`
	);

	if (loading) {
		return (
			<main>
				<Spinner />
			</main>
		);
	}

	if (error) {
		return (
			<main>
				<h1>Ha ocurrido un error</h1>
			</main>
		);
	}

	return (
		<main className='sm:layout-container'>
			<h2 className='text-3xl py-5'>Negocios cerca de tu ubicacion </h2>
			<section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-2 '>
				{data?.map(business => (
					<BusinessCard key={business.business_id} businessItem={business} />
				))}
			</section>
		</main>
	);
};

export default NearBusiness;
