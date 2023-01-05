import React from 'react';
import { useForm } from 'react-hook-form';

const CreateCategory = () => {
	const { handleSubmit, register, errors } = useForm();

	const fields = [
		{
			title: 'Category name',
			name: 'category-name',
			fieldType: 'text',
			ex: 'Empanadas',
			required: true,
		},
	];
	return (
		<div className='bg-white rounded-lg p-4'>
			<form onSubmit={handleSubmit(data => setData(JSON.stringify(data)))}>
				<h3 className='text-lg font-kanit font-semibold text-dark-gray my-2'>
					Create category
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

export default CreateCategory;
