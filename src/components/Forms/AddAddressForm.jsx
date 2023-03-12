import { IconArrowLeft } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';

const AddAddressForm = ({ onSubmit, prevFn, address }) => {
	const { register, handleSubmit } = useForm();
	const saveAddress = data => {
		console.log('🚀 ~ file: AddAddressForm.jsx:7 ~ saveAddress ~ data:', data);
		onSubmit({
			...address,
			desc: data.description,
			label: data.label,
		});
	};

	const handlePrevClick = () => prevFn();

	return (
		<article className='relative flex flex-col'>
			<header className='flex gap-2 justify-start my-2 border-b'>
				<IconArrowLeft
					width={40}
					height={40}
					className='p-2 rounded-full hover:bg-gray-100'
					onClick={handlePrevClick}
				/>
				<h2 className='text-3xl'>Agregar dirección</h2>
			</header>
			<form onSubmit={handleSubmit(saveAddress)}>
				<div className='my-3'>
					<label>Dirección</label> <br />
					<input
						type='text'
						disabled
						className='p-3 w-full'
						value={address.formatted_address}
					/>
				</div>
				<div className='my-3'>
					<label>Piso | Oficina | Dpto (opcional)</label>
					<input
						{...register('description')}
						type='text'
						placeholder='Descripción de la dirección'
						className='w-full px-2 py-1 mt-1 border-b border-gray-100 rounded-sm outline-none focus:border-accent'
					/>
				</div>

				<div className='my-3'>
					<label>Etiqueta (opcional)</label>
					<input
						{...register('label')}
						type='text'
						placeholder='Ej. Casa de mama'
						className='w-full px-2 py-1 mt-1 border-b border-gray-100 rounded-sm outline-none focus:border-accent'
					/>
				</div>

				<button
					className='w-auto flex justify-center p-5 text-white my-2 rounded-xl bg-accent'
					onClick={saveAddress}
				>
					Guardar dirección
				</button>
			</form>
		</article>
	);
};

export default AddAddressForm;
