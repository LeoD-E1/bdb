import { Link } from 'react-router-dom';
import Navbar from '../../components/Header/Navbar';
import Spinner from '../../components/Spinner/Spinner';
import { useUserStore } from '../../store/userStore';
import BusinessCard from './BusinessCard';
import { useFetch } from '../../Hook/useFetch';
import CommonBtn from '../../components/Content/CommonBtn';
const { VITE_APP_BASE_URL } = import.meta.env;

const SelectBusiness = () => {
	const user = useUserStore(state => state.user);
	const { data, loading, error } = useFetch(
		`${VITE_APP_BASE_URL}/business/${user.user_id}`
	);

	if (loading) {
		return (
			<div className='loader-div'>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return (
			<div className='loader-div'>
				<h1 className='text-3xl'> error </h1>
			</div>
		);
	}

	return (
		<>
			<Navbar />
			<main className='sm:layout-container pt-20'>
				<h1 className='text-xl mx-3 font-bold text-black'>
					¿Qué negocio, socio?
				</h1>
				<section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 p-2 '>
					{data ? (
						data.map(brand => (
							<Link
								to={`/business/${brand.business_id}/branch`}
								key={`${brand.business_name} - ${brand.business_id}`}
							>
								<BusinessCard businessItem={brand} />
							</Link>
						))
					) : (
						<div className='flex justify-center'>
							<CommonBtn
								action={() => console.log('action')}
								title='Crear Negocio'
							/>
						</div>
					)}
				</section>
			</main>
		</>
	);
};

export default SelectBusiness;
