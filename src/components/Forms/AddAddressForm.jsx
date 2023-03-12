import { IconArrowLeft } from '@tabler/icons-react';

const AddAddressForm = ({ onSubmit, prevFn, address }) => {
	const saveAddress = () => {
		onSubmit();
	};

	const handlePrevClick = () => {
		prevFn();
	};

	return (
		<article className='relative flex flex-col  items-center'>
			<header className='flex gap-2 justify-start my-2 border-b'>
				<IconArrowLeft
					width={40}
					height={40}
					className='p-2 rounded-full hover:bg-gray-100'
					onClick={handlePrevClick}
				/>
				<h2 className='text-3xl'>Agregar dirección</h2>
			</header>
			<span className='p-3'>{address.formatted_address}</span>
			<div className=''>
				<label>Piso | Oficina | Dpto (opcional)</label>
				<input
					type='text'
					placeholder='Descripción de la dirección'
					className='w-full px-2 py-1 mt-1 border-b border-gray-100 rounded-sm outline-none focus:border-accent'
				/>
			</div>

			<div className=''>
				<label>Etiqueta (opcional)</label>
				<input
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
		</article>
	);
};

export default AddAddressForm;
