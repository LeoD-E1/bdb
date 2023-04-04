import ProductTableItem from './ProductTableItem';
import { useEffect, useState } from 'react';
import { IconX } from '@tabler/icons-react';
import CreateProduct from './CreateProduct';
import { useModalStore } from '../../../../store/modalStore';

const ProductTable = ({ products, category, setCategory }) => {
	const showModal = useModalStore(state => state.updateVisibility);
	const updateModalType = useModalStore(state => state.updateModalType);
	const [renderProducts, setRenderProducts] = useState();
	const [visible, setVisible] = useState(false);

	const EditProduct = product => {
		showModal(true);
		updateModalType({
			newModalType: 'edit-product',
			newJustify: 'center',
			newArgs: {
				product,
			},
		});
	};

	const headers = ['Producto', 'Descripción', 'Precio', 'Acciones'];

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

	const arrayToRender = category.category_id ? renderProducts : products;

	useEffect(() => {
		setRenderProducts(
			products.filter(item => item.category_id === category.category_id)
		);
	}, [category, products]);

	return (
		<main className='rounded-lg bg-white p-5 shadow-lg relative overflow-y-auto min-h-[500px] max-h-[900px]'>
			<div className='md:flex md:justify-between md:items-center mb-1 border-b border-gray-light p-1'>
				<article className='flex items-center gap-2 bg-lightGrey p-2 rounded-lg justify-center'>
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
						className='p-2 w-full md:w-auto text-white my-1 rounded-md bg-accent font-kanit text-md font-semibold'
						onClick={handleShow}
					>
						+ Agregar
					</button>
				)}
			</div>
			<div className='w-full'>
				{arrayToRender.length ? (
					<table className=' text-gray border-separate space-y-6 text-sm w-full text-center overflow-x-auto'>
						<thead className='bg-lightGrey text-gray'>
							<tr>
								{headers.map((header, i) => (
									<th
										key={`${header}-${i}`}
										className='p-3 font-semibold text-accent'
									>
										{header}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{arrayToRender.map(product => (
								<ProductTableItem
									key={product.id + '-' + product.product_name}
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
				<section className='lg:z-5 lg:w-[50vw] lg:top-5 lg:absolute lg:right-5 lg:ml-5 sm:h-[600px]'>
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
