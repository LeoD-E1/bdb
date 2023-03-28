import { useForm } from 'react-hook-form';
import { REQUIRED_FIELD } from '../../../../constants/constants';
import CloseModalBtn from '../../../Content/CloseModalBtn';

const CreateCategory = () => {
	const { handleSubmit, register, errors } = useForm();

	const fields = [
		{
			title: 'Nombre de la sección',
			name: 'category_name',
			fieldType: 'text',
			ex: 'Empanadas',
			required: true,
		},
	];

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<main className='bg-white h-screen w-full shadow-lg md:rounded-lg p-5 md:max-w-2xl md:h-auto md:min-h-[500px] relative'>
			<CloseModalBtn />
			<form onSubmit={handleSubmit(onSubmit)}>
				<h3 className='text-lg font-kanit font-semibold text-dark-gray my-2'>
					Crear Sección
				</h3>
				<div className='flex flex-col'>
					{fields.map((field, i) => (
						<div key={i} className='my-1'>
							<h3 className='text-sm font-kanit font-semibold text-gray-300'>
								{field.title}
							</h3>
							<input
								type={field.fieldType}
								{...register(`${field.name}`, {
									required: {
										value: true,
										message: REQUIRED_FIELD,
									},
								})}
								name={field.name}
								placeholder={field.ex}
								className='p-2 px-4 border outline-none border-gray-300 rounded-md hover:outline-0 focus:border-accent'
							/>
							{/* <span className='text-xs text-red font-kanit'>
								{errors[field.name] && errors[field.name].message}
							</span> */}
						</div>
					))}
				</div>
				<button
					type='submit'
					className='bg-accent p-3 w-full rounded-lg text-md text-white my-2'
				>
					Guardar
				</button>
			</form>
		</main>
	);
};

export default CreateCategory;
