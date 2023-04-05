import { useQuery } from '@tanstack/react-query';
import { getBranchById } from '../api/branch/branchService';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import Navbar from '../components/Header/Navbar';
import noImage from '../assets/images/no-image.png';
import {
	IconSearch,
	IconStarFilled,
	IconChevronRight,
} from '@tabler/icons-react';

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

	return (
		<main className=''>
			<section className='relative flex flex-col justify-end w-full h-72'>
				<img
					src={data.data.portrait ?? noImage}
					alt={`portrait of ${data.data.business.business_name}`}
					className='absolute w-full h-full object-cover'
				/>
				<article className='z-10 px-20'>
					<h3 className='text-2xl  font-semibold my-3'>
						{data.data.business.business_name}
					</h3>
					<div className='flex justify-between max-w-xs '>
						<span className='text-sm'>30 - 45 min</span>
						<span className='text-sm'> $280 envio</span>
						<span className='text-sm'> Minimo $750</span>
					</div>

					<div className='relative w-full max-w-md my-5'>
						<input
							type='search'
							className='w-full py-1 pl-11 text-gray-700 rounded-full focus:outline-none focus:bg-white'
							placeholder='Busca productos'
						/>
						<IconSearch className='absolute top-0 h-full w-7 px-1 rounded-l-md focus:outline-none' />
					</div>
				</article>
			</section>
			{/*  Valoration section  */}
			<section className='h-16 bg-accent flex px-20 items-center gap-10'>
				<div className='flex gap-1 items-center'>
					<IconStarFilled className='text-green w-3 h-3' />
					<span className='text-lg text-green'> 4.6 </span>
				</div>

				<button className='flex items-center gap-2 bg-lightGrey p-2 rounded-lg justify-center'>
					<span>Opiniones</span>
					<IconChevronRight className='w-4 h-4' />
				</button>
			</section>
		</main>
	);
};

export default Store;
