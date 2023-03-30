import { useForm } from 'react-hook-form';

const CreateProduct = () => {
	const { handleSubmit, register } = useForm();
	const fields = [
		{
			title: 'Nombre del Producto',
			name: 'product-name',
			fieldType: 'text',
			ex: 'Empanada Jamon Queso',
			required: true,
		},
		{
			title: 'Descripción',
			name: 'product-description',
			fieldType: 'text',
			ex: 'Lorem Ipsum...',
			required: false,
		},
	];

	const onSubmit = data => {};

	return (
		<div className='bg-white h-full w-full shadow-lg rounded-lg my-1 p-5 md:max-w-2xl md:h-auto md:min-h-[500px] relative'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h3 className='text-lg font-kanit font-semibold text-dark-gray my-2'>
					Create Product
				</h3>
				<div className='flex flex-col'>
					{fields.map((field, i) => (
						<div key={i} className='my-1'>
							<h3 className='text-sm font-kanit font-semibold text-gray-300'>
								{field.title}
							</h3>
							<input
								type={field.fieldType}
								{...register(`${field.name}`)}
								placeholder={field.ex}
								className='p-2 px-4 border outline-none border-gray-300 rounded-md hover:outline-0 focus:border-accent'
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
