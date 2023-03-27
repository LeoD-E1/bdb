import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Header/Navbar';
import Spinner from '../../components/Spinner/Spinner';
import { useUserStore } from '../../store/userStore';
import BusinessCard from './BusinessCard';
import { useFetch } from '../../Hook/useFetch';
import CommonBtn from '../../components/Content/CommonBtn';
import { useEffect } from 'react';
import { useBusinessStore } from '../../store/businessStore';
import { getBranchById } from '../../api/branch/branchService';
import { useBranchStore } from '../../store/branchStore';

const { VITE_APP_BASE_URL } = import.meta.env;

const SelectBusiness = () => {
	const user = useUserStore(state => state.user);
	const { data, loading, error } = useFetch(
		`${VITE_APP_BASE_URL}/business/${user.user_id}`
	);
	const navigate = useNavigate();
	const fillWithBusiness = useBusinessStore(state => state.fillWithBusiness);
	const business = useBusinessStore(state => state.business);
	const selectBusiness = useBusinessStore(state => state.selectBusiness);
	const selectBranch = useBranchStore(state => state.selectBranch);

	const handleSelect = async businessItem => {
		selectBusiness(businessItem);
		await getBranchById(businessItem.branch[0].branch_id);
		selectBranch(businessItem.branch[0]);
		navigate(
			`/business/${businessItem.business_id}/branch/${businessItem.branch[0].branch_id}/dashboard`
		);
	};

	useEffect(() => {
		if (!business.length) {
			console.log('entro aca');
			const filteredItems =
				data?.filter(item => {
					return !business.includes(item);
				}) || [];
			fillWithBusiness(filteredItems);
		}
	}, [data]);

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
					{data ? '¿Qué negocio, socio?' : 'No tenés ningun negocio pa'}
				</h1>
				{data ? (
					<section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 p-2 '>
						{data.map(brand => (
							<button
								onClick={() => handleSelect(brand)}
								key={`${brand.business_name} - ${brand.business_id}`}
							>
								<BusinessCard businessItem={brand} />
							</button>
						))}
					</section>
				) : (
					<div className='flex justify-center'>
						<CommonBtn
							action={() => console.log('action')}
							title='Crear Negocio'
						/>
					</div>
				)}
			</main>
		</>
	);
};

export default SelectBusiness;
