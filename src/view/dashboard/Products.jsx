import { useState } from 'react';
import DashboarsLayout from '../../components/Dashboard/DashboardLayout';
import Categories from '../../components/Dashboard/e-commerce/products/Categories';
import ProductTable from '../../components/Dashboard/e-commerce/products/ProductTable';
import { useBranchStore } from '../../store/branchStore';

const Products = () => {
	const branch = useBranchStore(state => state.selectedBranch);
	const [selectedCategory, setSelectedCategory] = useState('');

	console.log('🚀 ~ file: Products.jsx:8 ~ Products ~ branch:', branch);

	const selectCat = cat => {
		setSelectedCategory(cat);
	};

	return (
		<div className='w-full'>
			<h3 className='text-xl text-gray font-semibold'>Manage products</h3>
			<div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 my-3'>
				<Categories
					categories={branch?.categories || []}
					setCategory={selectCat}
					selectedCat={selectedCategory}
				/>
				<div className='lg:col-span-3'>
					<ProductTable
						category={selectedCategory}
						products={branch?.products || []}
					/>
				</div>
			</div>
		</div>
	);
};

const ProductsView = () => (
	<DashboarsLayout>
		<Products />
	</DashboarsLayout>
);

export default ProductsView;
