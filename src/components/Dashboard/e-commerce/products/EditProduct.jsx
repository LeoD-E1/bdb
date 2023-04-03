import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { editProduct } from '../../../../api/product/productService';
import { useBranchStore } from '../../../../store/branchStore';
import { useUserStore } from '../../../../store/userStore';
import Spinner from '../../../Spinner/Spinner';
import CloseModalBtn from '../../../Content/CloseModalBtn';

const EditProduct = ({ product }) => {
	const { handleSubmit, register } = useForm();
	const branch = useBranchStore(state => state.selectedBranch);
	const token = useUserStore(state => state.token);
	const queryClient = useQueryClient();
	const fields = [
		{
			title: 'Imagen del Producto',
			name: 'product_image',
			fieldType: 'file',
			ex: 'Imagen del producto',
			// defaultValue: product.image_url,
			required: false,
		},
		{
			title: 'Nombre del Producto',
			name: 'product_name',
			fieldType: 'text',
			ex: 'Sangunche de milanesa',
			defaultValue: product.product_name,
			required: true,
		},
		{
			title: 'Descripción',
			name: 'product_description',
			fieldType: 'text',
			ex: 'de pollo, con jamon y queso',
			defaultValue: product.description,
			required: false,
		},
		{
			title: 'Precio',
			name: 'price',
			fieldType: 'number',
			ex: '580',
			defaultValue: product.price,
			required: true,
		},
	];

	const mutation = useMutation({
		mutationFn: editProduct,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['branch'] });
		},
	});

	const onSubmit = data => {
		mutation.mutate({
			category_id: product.category_id,
			image_url: data.product_image[0],
			price: data.price,
			product_name: data.product_name,
			product_description: data.product_description,
			branch_id: branch.branch_id,
			token,
		});
	};

	if (mutation.isLoading) {
		return (
			<div className='loader-div'>
				<Spinner />
			</div>
		);
	}

	if (mutation.isError) {
		return (
			<div className='loader-div'>
				<h1 className='text-3xl'> {mutation.error.message} </h1>
			</div>
		);
	}

	return (
		<div className='bg-white h-full w-full shadow-lg rounded-lg my-1 p-5 sm:max-w-2xl sm:h-auto sm:min-h-[500px] relative'>
			<CloseModalBtn />
			<form onSubmit={handleSubmit(onSubmit)}>
				<h3 className='text-lg font-kanit font-semibold text-dark-gray my-2'>
					Editar producto
				</h3>
				<div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 items-center'>
					{/* <article>
						<h3 className='text-sm font-kanit font-semibold text-gray-300 '>
							Sección
						</h3>
						<input
							type='text'
							value={category.category_name}
							className='p-2 px-4 border outline-none border-gray-300 rounded-md hover:outline-0 focus:border-accent w-full'
							disabled
						/>
					</article> */}
					<article className='w-full'>
						<h4>Imagen actual</h4>
						<div className='relative w-full h-32 bg-black hover:opacity-20'>
							<img
								src={product.image_url}
								alt={product.product_name}
								className='absolute w-full h-full object-cover'
							/>
						</div>
					</article>
					{fields.map((field, i) => (
						<article
							key={i}
							className={`${field.fieldType === 'file' && 'col-span-2'}`}
						>
							<h3 className='text-sm font-kanit font-semibold text-gray-300 '>
								{field.title}{' '}
								{field.required && <span className='text-sm text-red'>*</span>}
							</h3>
							<input
								type={field.fieldType}
								{...register(`${field.name}`)}
								placeholder={field.ex}
								defaultValue={field.defaultValue}
								className='p-2 px-4 border outline-none border-gray-300 rounded-md hover:outline-0 focus:border-accent w-full'
							/>
						</article>
					))}
				</div>
				<input
					type='submit'
					className='bg-accent p-3 w-full rounded-lg text-md text-white my-2'
				/>
			</form>
		</div>
	);
};

export default EditProduct;
