import { useEffect, useState } from 'react';
import { getProductsByCategory } from '../../api/getProductsByCategory';
import DashboarsLayout from '../../components/Dashboard/DashboardLayout';
import Categories from '../../components/Dashboard/e-commerce/products/Categories';
import ProductTable from '../../components/Dashboard/e-commerce/products/ProductTable';
import { getAllCategories } from '../../api/categories';

const Products = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [categories] = useState([
		'hamburguesas',
		'empanadas',
		'pizzas',
		'pastas',
		'postres',
		'bebidas',
	]);
	const [selectedCategory, setSelectedCategory] = useState(categories[0]);

	const getData = async () => {
		try {
			!loading && setLoading(true);
			const data = await getProductsByCategory(selectedCategory);
			const categories = await getAllCategories();
			console.log(
				'🚀 ~ file: Products.jsx:27 ~ getData ~ categories',
				categories
			);
			setProducts(data);
		} catch (error) {
			console.error(error);
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		(async () => {
			getData();
		})();
	}, [selectedCategory]);

	const selectCat = cat => {
		setSelectedCategory(cat);
	};

	return (
		<div className='w-full'>
			{error ? (
				<div className='flex flex-col justify-center items-center h-[80vh]'>
					<h1>An error has ocurred</h1>
					<button
						className='p-3 text-white rounded-md bg-accent font-kanit text-md font-semibold'
						onClick={() => window.location.reload()}
					>
						Reload
					</button>
				</div>
			) : (
				<>
					<h3 className='text-xl text-gray font-semibold'>Manage products</h3>
					<div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 my-3'>
						<Categories
							categories={categories}
							setCategory={selectCat}
							selectedCat={selectedCategory}
						/>
						<div className='lg:col-span-3'>
							{loading ? (
								<h1>Loading...</h1>
							) : (
								<ProductTable category={selectedCategory} products={products} />
							)}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

const ProductsView = () => (
	<DashboarsLayout>
		<Products />
	</DashboarsLayout>
);

export default ProductsView;
