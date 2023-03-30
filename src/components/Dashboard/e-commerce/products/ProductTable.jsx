import ProductTableItem from './ProductTableItem';
import { useEffect, useState } from 'react';
import { IconX } from '@tabler/icons-react';
import CreateProduct from './CreateProduct';

const ProductTable = ({ products, category, setCategory }) => {
	console.log(
		'🚀 ~ file: ProductTable.jsx:7 ~ ProductTable ~ products:',
		products
	);
	const [renderProducts, setRenderProducts] = useState([...products]);
	const [visible, setVisible] = useState(false);

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
	const handleShow = () => setVisible(true);

	useEffect(() => {
		setRenderProducts(
			renderProducts.filter(item => item.category_id === category.category_id)
		);
	}, [category]);

	return (
		<main className='rounded-lg bg-white p-5 shadow-lg relative'>
			<div className='md:flex md:justify-between md:items-center mb-1 border-b border-gray-light p-1'>
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
				{category.category_id && (
					<button
						className='p-2 w-full md:w-auto text-white rounded-md bg-accent font-kanit text-md font-semibold'
						onClick={handleShow}
					>
						+ Agregar
					</button>
				)}
			</div>
			<div className='w-full'>
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
							{products.map(product => (
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
			{visible && (
				<section className='lg:z-5 lg:w-[30vw] lg:top-5 lg:absolute lg:right-5 lg:ml-5 sm:h-[600px]'>
					<CreateProduct
						closeFn={() => setVisible(false)}
						category={category}
					/>
				</section>
			)}
		</main>
	);
};

export default ProductTable;
