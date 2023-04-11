import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { updateProduct } from '../../../../api/product/productService';
import { useUserStore } from '../../../../store/userStore';
import Spinner from '../../../Spinner/Spinner';
import CloseModalBtn from '../../../Content/CloseModalBtn';
import noImage from '../../../../assets/images/no-image.png';
import { useState } from 'react';
import { useModalStore } from '../../../../store/modalStore';

const EditProduct = ({ product }) => {
	const { handleSubmit, register } = useForm();
	const [changedFields, setChangedFields] = useState({});
	const [image, setImage] = useState(null);
	const token = useUserStore(state => state.token);
	const queryClient = useQueryClient();
	const closeModal = useModalStore(state => state.updateVisibility);
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
			defaultValue: product.product_name,
			required: true,
		},
		{
			title: 'Descripción',
			name: 'description',
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

	const handleChange = ({ target }) => {
		setChangedFields({
			...changedFields,
			[target.name]: target.value,
		});
	};

	const mutation = useMutation({
		mutationFn: updateProduct,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['branch'] });
			closeModal(false);
		},
	});

	const onSubmit = data => {
		const imageObj = data.product_image[0];
		const fieldsToUpdate = image
			? { ...changedFields, imageObj }
			: changedFields;

		mutation.mutate({
			product_id: product.product_id,
			fields: fieldsToUpdate,
			token,
		});
	};

	const imgToDisplay = image ?? product.image_url;

	const onImageChange = element => {
		const [img] = element.target.files;
		setImage(URL.createObjectURL(img));
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
		<div className='bg-white h-full w-full shadow-lg sm:rounded-lg px-2 sm:max-w-2xl sm:h-auto sm:min-h-[500px] relative'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col h-full justify-between overflow-y-auto'
			>
				<CloseModalBtn />

				<h3 className='text-lg font-kanit font-semibold text-dark-gray my-2 text-center'>
					Editar producto
				</h3>
				<section>
					<div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 items-center'>
						<article className=''>
							<h4>Imagen actual</h4>
							<div className='relative w-full h-32 bg-black hover:opacity-20 rounded-lg'>
								<img
									src={imgToDisplay ?? noImage}
									alt={product.product_name + 'image'}
									className='absolute w-full h-full object-cover'
								/>
							</div>
						</article>
						{fields.map((field, i) => (
							<article
								key={i}
								className={`${field.fieldType === 'file' && 'sm:col-span-2'}`}
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
									defaultValue={field.defaultValue}
									onChange={
										field.fieldType === 'file' ? onImageChange : handleChange
									}
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

export default EditProduct;
