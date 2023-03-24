import { Link, useParams } from 'react-router-dom';
import CommonBtn from '../../components/Content/CommonBtn';
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
								to={`/business/${branch.branch_id}/branch/:branch_id`}
								key={`${branch.branch_address} - ${branch.branch_id}`}
							>
								<BusinessCard businessItem={branch} />
							</Link>
						))
					) : (
						<div className='flex justify-center'>
							<CommonBtn
								title='Crear sucursal'
								action={() => console.log('action')}
							/>
						</div>
					)}
				</section>
			</main>
		</>
	);
};

export default SelectBranch;
