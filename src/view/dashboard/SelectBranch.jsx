import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Header/Navbar';
import Spinner from '../../components/Spinner/Spinner';
import { useFetch } from '../../Hook/useFetch';
import BusinessCard from './BusinessCard';

const { VITE_APP_BASE_URL } = import.meta.env;

const SelectBranch = () => {
	const { businessId } = useParams();
	const { data, loading, error } = useFetch(
		`${VITE_APP_BASE_URL}/branch/${businessId}`
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
					¿Qué sucursal, socio?
				</h1>
				<section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 p-2 '>
					{data ? (
						data.map(branch => (
							<Link
								to={`/business/${branch.branch_id}/branch`}
								key={`${branch.branch_address} - ${branch.branch_id}`}
							>
								<BusinessCard businessItem={branch} />
							</Link>
						))
					) : (
						<div className=''>
							<button className='mt-5'>
								<a className='relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring'>
									<span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0'></span>

									<span className='relative block px-8 py-3 bg-[#1A2238] border border-current'>
										Crear Sucursal
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

export default SelectBranch;
