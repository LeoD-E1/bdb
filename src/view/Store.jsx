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
	IconHeartFilled,
	IconHeart,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import CategoryList from '../components/Content/category/CategoryList';
import ProductList from '../components/store/ProductList';

const Store = () => {
	const { branch_id } = useParams();
	const { data, isError, isLoading, error } = useQuery({
		queryKey: ['get-branch-by-location'],
		queryFn: () => getBranchById({ branchId: branch_id }),
	});
	console.log('🚀 ~ file: Store.jsx:23 ~ Store ~ data:', data);

	const [liked, setLiked] = useState(false);
	const [category, setCategory] = useState(null);
	const [products, setProducts] = useState([]);

	const handleClick = () => setLiked(!liked);

	useEffect(() => {
		// set product based on category_id
		if (category) {
			setProducts(
				data.data.products.filter(
					product => product.category_id === category?.category_id
				)
			);
		}
	}, [category]);

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
		<>
			<Navbar />

			<section className='relative w-full h-64'>
				<img
					src={data.data.business.portrait || data.data.business.image_url || noImage}
					alt={`portrait of ${data.data.business.business_name}`}
					className='absolute w-full h-full object-cover aspect-video origin-center z-5'
				/>
				<article className='z-10 px-20 bg-black opacity-40 h-full flex flex-col justify-end'>
					<div className='flex justify-between max-w-md'>
						<h3 className='text-2xl  font-semibold my-3 text-white'>
							{data.data.business.business_name}
						</h3>
						{liked ? (
							<IconHeartFilled
								className='h-full w-7 px-1 text-white'
								onClick={handleClick}
							/>
						) : (
							<IconHeart
								className='h-full w-7 px-1 text-white'
								onClick={handleClick}
							/>
						)}
					</div>
					<div className='flex justify-between max-w-xs '>
						<span className='text-sm text-white'>30 - 45 min</span>
						<span className='text-sm text-white'> $280 envio</span>
						<span className='text-sm text-white'> Minimo $750</span>
					</div>

					<div className='relative w-full max-w-md my-5'>
						<input
							type='search'
							className='w-full py-1 pl-11 text-gray-700 rounded-full focus:outline-none focus:bg-white'
							placeholder='Busca productos'
						/>
						<IconSearch className='absolute top-0 h-full w-7 px-1 rounded-l-full focus:outline-none' />
					</div>
				</article>
			</section>

			{/*  Valoration section  */}
			<section className='h-16 bg-accent flex px-20 items-center gap-10'>
				<div className='flex gap-1 items-center'>
					<IconStarFilled className='text-green w-3 h-3' />
					<span className='text-lg text-green'> 4.6 </span>
				</div>

				<button className='flex items-center gap-2 bg-lightGrey px-3 py-1 rounded-full justify-center'>
					<span className='text-sm'>Opiniones</span>
					<IconChevronRight className='w-4 h-4' />
				</button>
			</section>

			{/* Main section  */}
			<main className='flex flex-col md:flex-row md:py-5 gap-1 md:px-10'>
				{/* Categories section */}
				<section className='border rounded-lg min-w-[200px]'>
					<CategoryList
						categories={data.data.categories}
						setCategory={cat => setCategory(cat)}
						selectedCategory={category}
					/>
				</section>
				<ProductList products={products} />
			</main>
		</>
	);
};

export default Store;
