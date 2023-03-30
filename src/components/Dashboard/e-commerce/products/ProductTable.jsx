import ProductTableItem from './ProductTableItem';
import { useModalStore } from '../../../../store/modalStore';
import { useEffect, useState } from 'react';
import { IconX } from '@tabler/icons-react';

const ProductTable = ({ products, category, setCategory }) => {
	const updateVisibility = useModalStore(state => state.updateVisibility);
	const updateModalType = useModalStore(state => state.updateModalType);
	const [renderProducts, setRenderProducts] = useState([...products]);

	const EditProduct = id => {
		console.log('Edit Product', id);
	};
	const DeleteProduct = id => {
		console.log('Delete Product', id);
	};

	const unSelectCategory = () => {
		setCategory({});
	};

	const actions = {
		Edit: EditProduct,
		Delete: DeleteProduct,
	};

	const handleCreate = () => {
		updateVisibility(true);
		updateModalType({ newModalType: 'create-product', newJustify: 'center' });
	};

	useEffect(() => {
		setRenderProducts(
			renderProducts.filter(item => item.category_id === category.category_id)
		);
	}, [category]);

	return (
		<div className='rounded-lg bg-white p-5 shadow-lg'>
			<div className='flex justify-between items-center mb-1 border-b border-gray-light p-1'>
				<article className='flex items-center gap-2 bg-lightGrey p-2 rounded-lg'>
					{category.category_name && (
						<IconX
							className='text-gray hover:text-black hover:bg-white rounded-full'
							onClick={unSelectCategory}
						/>
					)}
					<h3 className='text-lg text-gray font-semibold'>
						{category.category_name ?? 'Todos los productos'}
					</h3>
				</article>
				<button
					className='p-2 text-white rounded-md bg-accent font-kanit text-md font-semibold'
					onClick={handleCreate}
				>
					+ Agregar
				</button>
			</div>
			<div className='overflow-auto lg:overflow-visible w-full'>
				{products.length ? (
					<table className=' text-gray border-separate space-y-6 text-sm w-full'>
						<thead className='bg-lightGrey text-gray'>
							<tr>
								<th className='p-3'>Product</th>
								<th className='p-3'>Pricing</th>
								<th className='p-3'>Quantity</th>
								<th className='p-3'>Status</th>
								<th className='p-3'>Actions</th>
							</tr>
						</thead>
						<tbody>
							{renderProducts.map(product => (
								<ProductTableItem
									key={product.id}
									product={product}
									actions={actions}
								/>
							))}
						</tbody>
					</table>
				) : (
					<article className='flex justify-center w-full'>
						<h2 className='text-gray font-semibod text-xl'>
							No tenés productos registrados
						</h2>
					</article>
				)}
			</div>
		</div>
	);
};

export default ProductTable;
