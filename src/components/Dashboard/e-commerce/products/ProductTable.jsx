import { useState } from 'react';
import ProductTableItem from './ProductTableItem';
import { useModalStore } from '../../../../store/modalStore';

const ProductTable = ({ products }) => {
	const updateVisibility = useModalStore(state => state.updateVisibility);

	const EditProduct = id => {
		console.log('Edit Product', id);
	};
	const DeleteProduct = id => {
		console.log('Delete Product', id);
	};

	const actions = {
		Edit: EditProduct,
		Delete: DeleteProduct,
	};

	return (
		<div className='rounded-lg bg-white p-5 my-3 shadow-lg'>
			<div className='my-2'>
				<button
					className='p-3 text-white rounded-md bg-accent font-kanit text-md font-semibold'
					onClick={() => updateVisibility(true)}
				>
					+ Add new
				</button>
			</div>
			<div className='overflow-auto lg:overflow-visible w-full'>
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
						{products.map(product => (
							<ProductTableItem
								key={product.id}
								product={product}
								actions={actions}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProductTable;
