import { useEffect, useState } from 'react';
import DashboarsLayout from '../../components/Dashboard/DashboardLayout';
import ProductTable from '../../components/Dashboard/e-commerce/products/ProductTable';

const Products = () => {
	const getData = async () => {
		const url = '/public/products.json';
		const response = await fetch(url);
		const data = await response.json();
		setProducts(data);
	};

	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			getData();
		})();
	}, []);

	return (
		<div className='w-full'>
			<h3 className='text-xl text-gray font-semibold'>Manage products</h3>
			<ProductTable products={products} />
		</div>
	);
};

const ProductsView = () => (
	<DashboarsLayout>
		<Products />
	</DashboarsLayout>
);

export default ProductsView;
