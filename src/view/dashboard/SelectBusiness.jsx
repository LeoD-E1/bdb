import { Link } from 'react-router-dom';
import Navbar from '../../components/Header/Navbar';
import Spinner from '../../components/Spinner/Spinner';
import { useUserStore } from '../../store/userStore';
import BusinessCard from './BusinessCard';
import { useFetch } from '../../Hook/useFetch';
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
				<section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-2 '>
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
						<div className='loader-div max-h-[100vh]'>
							<button className='mt-5'>
								<a className='relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring'>
									<span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0'></span>

									<span className='relative block px-8 py-3 bg-[#1A2238] border border-current'>
										Crear negocio
									</span>
								</a>
							</button>
						</div>
					)}
				</section>
			</main>
		</>
	);
};

export default SelectBusiness;
