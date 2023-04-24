import Navbar from '../../components/Header/Navbar';
import Spinner from '../../components/Spinner/Spinner';
import { useUserStore } from '../../store/userStore';
import BusinessCard from './BusinessCard';
import CommonBtn from '../../components/Content/CommonBtn';
import { useQuery } from '@tanstack/react-query';
import { getBusinessByUserId } from '../../api/business/businessService';
import { useModalStore } from '../../store/modalStore';

const SelectBusiness = () => {
	const user = useUserStore(state => state.user);
	const updateVisibility = useModalStore(state => state.updateVisibility);
	const updateModalType = useModalStore(state => state.updateModalType);
	const token = useUserStore(state => state.token);

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ['business'],
		queryFn: () => getBusinessByUserId({ userId: user.user_id, token }),
	});

	// const handleSelect = async businessItem => {
	// 	try {
	// 		// setIsLoading(true);
	// 		selectBusiness(businessItem);
	// 		await getBranchById({ branchId: businessItem.branch[0].branch_id });
	// 		selectBranch(businessItem.branch[0]);
	// 		navigate(
	// 			`/business/${businessItem.business_id}/branch/${businessItem.branch[0].branch_id}/dashboard`
	// 		);
	// 	} catch (error) {
	// 		setHasError(error);
	// 	} finally {
	// 		setIsLoading(false);
	// 	}
	// };

	const handleClick = event => {
		updateVisibility(true);
		updateModalType({
			newModalType: 'create-business',
			newJustify: 'center',
			newItems: 'center',
		});
	};

	if (isLoading) {
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
			<Navbar />
			<main className='sm:layout-container pt-20'>
				<h1 className='text-xl mx-3 font-bold text-black'>
					{data?.length ? '¿Qué negocio, socio?' : 'No tenés ningun negocio pa'}
				</h1>
				{data?.length ? (
					<section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 p-2 '>
						{data.map(brand => (
							<button
								// onClick={() => handleSelect(brand)}
								key={`${brand.business_name} - ${brand.business_id}`}
							>
								<BusinessCard businessItem={brand} />
							</button>
						))}
					</section>
				) : (
					<div className='flex justify-center'>
						<CommonBtn action={handleClick} title='Crear Negocio' />
					</div>
				)}
			</main>
		</>
	);
};

export default SelectBusiness;
