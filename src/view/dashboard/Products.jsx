import DashboarsLayout from '../../components/Dashboard/DashboardLayout';
import ProductTable from '../../components/Dashboard/e-commerce/products/ProductTable';

const Products = () => {
	return (
		<div className='flex justify-center items-center w-full h-screen'>
			<ProductTable />
		</div>
	);
};

const ProductsView = () => (
	<DashboarsLayout>
		<Products />
	</DashboarsLayout>
);

export default ProductsView;
