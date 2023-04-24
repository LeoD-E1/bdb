import { IconX } from '@tabler/icons-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useBranchStore } from '../../store/branchStore';
import { useUserStore } from '../../store/userStore';
import { useModalStore } from '../../store/modalStore';
import { createBusiness } from '../../api/business/businessService';

const CreateBusiness = () => {
	const { handleSubmit, register } = useForm();
	const branch = useBranchStore(state => state.selectedBranch);
	const closeFn = useModalStore(state => state.updateVisibility);
	const token = useUserStore(state => state.token);
	const queryClient = useQueryClient();
	const fields = [
		{
			title: 'Imagen del Producto',
			name: 'product_image',
			fieldType: 'file',
			ex: 'Imagen del producto',
			required: false,
		},
		{
			title: 'Nombre del Producto',
			name: 'product_name',
			fieldType: 'text',
			ex: 'Sangunche de milanesa',
			required: true,
		},
		{
			title: 'Descripción',
			name: 'product_description',
			fieldType: 'text',
			ex: 'de pollo, con jamon y queso',
			required: false,
		},
		{
			title: 'Precio',
			name: 'price',
			fieldType: 'number',
			ex: '580',
			required: true,
		},
	];

	const mutation = useMutation({
		mutationFn: createBusiness,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['business'] });
			closeFn(false);
		},
	});

	const onSubmit = data => {
		mutation.mutate({
			image_url: data.product_image[0],
			price: data.price,
			product_name: data.product_name,
			product_description: data.product_description,
			branch_id: branch.branch_id,
			token,
		});
	};

	const handleClose = () => closeFn(false);
	return (
		<div className='bg-white h-full w-full shadow-lg rounded-lg p-3 my-1 sm:max-w-2xl sm:h-auto sm:min-h-[500px] relative'>
			<IconX onClick={handleClose} />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col h-full justify-between overflow-y-auto'
			>
				<section>
					<h3 className='text-lg font-kanit font-semibold text-dark-gray my-2 text-center'>
						Create Product
					</h3>
					<div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 items-center'>
						{fields.map((field, i) => (
							<article
								key={i}
								className={`${field.fieldType === 'file' && 'md:col-span-2'}`}
							>
								<h3 className='text-sm font-kanit font-semibold text-gray-300 '>
									{field.title}{' '}
									{field.required && (
										<span className='text-sm text-red'>*</span>
									)}
								</h3>
								<input
									type={field.fieldType}
									{...register(`${field.name}`)}
									placeholder={field.ex}
									className='p-2 px-4 border outline-none border-gray-300 rounded-md hover:outline-0 focus:border-accent w-full'
								/>
							</article>
						))}
					</div>
				</section>
				<section className='w-full'>
					<input
						type='submit'
						className='bg-accent p-3 w-full rounded-lg text-md text-white sm:my-3'
					/>
				</section>
			</form>
		</div>
	);
};

export default CreateBusiness;
