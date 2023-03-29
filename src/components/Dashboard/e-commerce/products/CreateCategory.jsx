import { useForm } from 'react-hook-form';
import { REQUIRED_FIELD } from '../../../../constants/constants';
import { createCategory } from '../../../../api/category/categoryService';
import { useBranchStore } from '../../../../store/branchStore';
import { useUserStore } from '../../../../store/userStore';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import Spinner from '../../../Spinner/Spinner';
import { IconX } from '@tabler/icons-react';

const CreateCategory = ({ close }) => {
	const branch = useBranchStore(state => state.selectedBranch);
	const token = useUserStore(state => state.token);
	const queryClient = useQueryClient();

	const { handleSubmit, register } = useForm();

	const fields = [
		{
			title: 'Nombre de la sección',
			name: 'category_name',
			fieldType: 'text',
			ex: 'Empanadas',
			required: true,
		},
	];

	const mutation = useMutation({
		mutationFn: obj => createCategory(obj),
		onSuccess: () => {
			queryClient.invalidateQueries('branch');
			close();
		},
	});

	const handleClick = () => close();

	const onSubmit = data => {
		const category = mutation.mutate({
			category_name: data.category_name,
			branch_id: branch.branch_id,
			token,
		});
		console.log(category);
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
		<main className='bg-white h-full w-full shadow-lg md:rounded-lg my-1 p-5 md:max-w-2xl md:h-auto md:min-h-[500px] relative'>
			<IconX onClick={handleClick} />
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
								className='w-full md:w-auto p-2 px-4 border outline-none border-gray-300 rounded-md hover:outline-0 focus:border-accent'
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
