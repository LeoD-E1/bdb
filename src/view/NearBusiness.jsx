import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import { useFetch } from '../Hook/useFetch';
import BusinessCard from './dashboard/BusinessCard';
const { VITE_APP_BASE_URL } = import.meta.env;

const NearBusiness = () => {
	const address = JSON.parse(localStorage.getItem('addressData'));
	const latitude = address?.geometry.location.lat;
	const longitude = address?.geometry.location.lng;

	const { data, loading, error } = useFetch(
		`${VITE_APP_BASE_URL}/business?lat=${latitude}&lng=${longitude}`
	);

	if (loading) {
		return (
			<main className='loader-div max-h-[40vh]'>
				<Spinner />
			</main>
		);
	}

	if (error) {
		return (
			<main className='loader-div max-h-[40vh]'>
				<h1>Ha ocurrido un error</h1>
			</main>
		);
	}

	return (
		<main className='sm:layout-container'>
			<h2 className='text-3xl py-5'>Bocados de barrio cerca</h2>
			{data.length ? (
				<section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-2 '>
					{data.map(business => (
						<Link
							to={`/store?name=${business.business_name}&lat=${latitude}&lng=${longitude}`}
							key={business.business_id + business.business_name}
						>
							<BusinessCard businessItem={business} />
						</Link>
					))}
				</section>
			) : (
				<h2 className='text-xl text-center py-6'>
					No hay bocados de barrio cerca{' '}
				</h2>
			)}
		</main>
	);
};

export default NearBusiness;
