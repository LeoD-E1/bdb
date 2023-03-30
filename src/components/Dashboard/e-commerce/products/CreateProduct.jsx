import { IconX } from '@tabler/icons-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { createProduct } from '../../../../api/product/productService';
import { useBranchStore } from '../../../../store/branchStore';
import { useUserStore } from '../../../../store/userStore';

const CreateProduct = ({ closeFn, category }) => {
	const { handleSubmit, register } = useForm();
	const branch = useBranchStore(state => state.selectedBranch);
	const token = useUserStore(state => state.token);
	const queryClient = useQueryClient();
	const fields = [
		{
			title: 'Nombre del Producto',
			name: 'product_name',
			fieldType: 'text',
			ex: 'Sangunche de milanesa',
			required: true,
		},
		{
			title: 'Precio',
			name: 'price',
			fieldType: 'number',
			ex: '580',
			required: false,
		},
	];

	const mutation = useMutation({
		mutationFn: obj => createProduct(obj),
		onSuccess: () => {
			queryClient.invalidateQueries('branch');
			closeFn();
		},
	});

	const handleClose = () => closeFn();

	const onSubmit = data => {
		const product = mutation.mutate({
			category_id: category.category_id,
			price: data.price,
			product_name: data.product_name,
			branch_id: branch.branch_id,
			token,
		});
		console.log(
			'🚀 ~ file: CreateProduct.jsx:48 ~ onSubmit ~ product:',
			product
		);
	};

	return (
		<div className='bg-white h-full w-full shadow-lg rounded-lg my-1 p-5 sm:max-w-2xl sm:h-auto sm:min-h-[500px] relative'>
			<IconX onClick={handleClose} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<h3 className='text-lg font-kanit font-semibold text-dark-gray my-2'>
					Create Product
				</h3>
				<div className='flex gap-2 flex-col md:flex-row md:items-center'>
					<article>
						<h3 className='text-sm font-kanit font-semibold text-gray-300 '>
							Sección
						</h3>
						<input
							type='text'
							value={category.category_name}
							className='p-2 px-4 border outline-none border-gray-300 rounded-md hover:outline-0 focus:border-accent w-full'
							disabled
						/>
					</article>
					{fields.map((field, i) => (
						<div key={i} className='my-1'>
							<h3 className='text-sm font-kanit font-semibold text-gray-300 '>
								{field.title}
							</h3>
							<input
								type={field.fieldType}
								{...register(`${field.name}`)}
								placeholder={field.ex}
								className='p-2 px-4 border outline-none border-gray-300 rounded-md hover:outline-0 focus:border-accent w-full'
							/>
						</div>
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

export default CreateProduct;
