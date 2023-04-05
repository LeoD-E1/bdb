import { useQuery } from '@tanstack/react-query';
import { getBranchById } from '../api/branch/branchService';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';

const Store = () => {
	const { branch_id } = useParams();
	const { data, isError, isLoading, error } = useQuery({
		queryKey: ['get-branch-by-location'],
		queryFn: () => getBranchById({ branchId: branch_id }),
	});

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
				<h1 className='text-3xl'>{error.message} </h1>
			</div>
		);
	}

	return <main className=''>{data.data.business.business_name}</main>;
};

export default Store;
