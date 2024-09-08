import Spinner from '../../components/Spinner/Spinner';
import { useUserStore } from '../../store/userStore';
import BusinessCard from './BusinessCard';
import CommonBtn from '../../components/Content/CommonBtn';
import { useQuery } from '@tanstack/react-query';
import { getBusinessByUserId } from '../../api/business/businessService';
import { useNavigate } from 'react-router-dom';
import { useBusinessStore } from '../../store/businessStore';
import { useState } from 'react';
import { useBranchStore } from '../../store/branchStore';
// import { getBranchById } from '../../api/branch/branchService';


const SelectBusiness = () => {
	const [isLoading, setIsLoading] = useState(false);
	const user = useUserStore(state => state.user);
	const token = useUserStore(state => state.token);
	const selectBusiness = useBusinessStore(state => state.selectBusiness);
	const selectBranch = useBranchStore(state => state.selectBranch);
	const navigate = useNavigate();

	const { isLoading: loading, isError, data, error } = useQuery({
		queryKey: ['business'],
		queryFn: () => getBusinessByUserId({ userId: user.user_id, token }),
	});

	const handleSelect =  businessItem => {
		try {
			setIsLoading(true);
			selectBusiness(businessItem);
			// await getBranchById({ branchId: businessItem.branch[0].branch_id });
			selectBranch(businessItem.branch[0]);
			navigate(
				`/business/${businessItem.business_id}/branch/${businessItem.branch[0].branch_id}/dashboard`
			);
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false);
		}
	};

	const handleClick = event => {
		navigate('/business/create');
	};

	if (isLoading || loading) {
		return (
			<div className='loader-div'>
				<Spinner />
			</div>
		);
	}

	if (isError) {
		return (
			<div className='loader-div'>
				<h1 className='text-3xl'> {error} </h1>
			</div>
		);
	}

	return (
		<>
			{/* <Navbar /> */}
			<main className='sm:layout-container pt-20'>
				<h1 className='text-xl mx-3 sm:mx-0 font-bold text-black'>
					{data.businesses ? '¿Qué negocio, socio?' : 'No tenés ningun negocio pa'}
				</h1>
				{data.businesses ? (
					<section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 p-2 '>
						{data.businesses.map(brand => (
							<button
								onClick={() => handleSelect(brand)}
								key={`${brand.business_name} - ${brand.business_id}`}
							>
								<BusinessCard businessItem={brand} />
							</button>
						))}
					</section>
				) : (
					<div className='sm:mx-0 mx-3'>
						<CommonBtn action={handleClick} title='Crear Negocio' />
					</div>
				)}
			</main>
		</>
	);
};

export default SelectBusiness;
