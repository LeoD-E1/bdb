import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Autocomplete } from '@react-google-maps/api';

const AddressForm = ({ center, coord, onSubmit, cleanFn }) => {
	const navigate = useNavigate();
	const { handleSubmit, register } = useForm();

	const addAddress = data => {
		if (data.address === '') return Error('Invalid address');
		localStorage.setItem('addressData', JSON.stringify(data));
		navigate('/home');
	};

	return (
		<form
			onSubmit={
				center.lat !== coord.lat
					? handleSubmit(addAddress)
					: handleSubmit(onSubmit)
			}
			className='mx-2 z-10 absolute bg-white top-5 md:flex md:flex-col p-2 rounded-lg'
		>
			<Autocomplete>
				<input
					{...register('address')}
					type='text'
					placeholder='Dirección'
					className='w-full px-2 py-1 mt-1 border border-gray-100 rounded-sm focus:outline-none focus:border-accent'
				/>
			</Autocomplete>

			<div className='grid grid-cols-2 gap-1'>
				<input
					{...register('extra')}
					placeholder='dep, timbre, etc'
					className='w-full mt-1 px-2 py-1 border border-gray-100 rounded-sm focus:outline-none focus:border-accent'
					type='text'
				/>

				<input
					{...register('locationName')}
					placeholder='Nombre de la dirección'
					className='w-full mt-1 px-2 py-1 border border-gray-100 rounded-sm focus:outline-none focus:border-accent'
					type='text'
				/>
			</div>

			<div className='flex gap-1'>
				<button
					type='submit'
					className='w-full px-3 py-1 my-1 bg-accent text-white rounded-sm hover:bg-blue-600 focus:outline-none focus:bg-blue '
				>
					{center.lat !== coord.lat ? 'Agregar dirección' : 'Buscar'}
				</button>
				{center.lat !== coord.lat && (
					<button
						onClick={cleanFn}
						className='px-3 py-1 my-1 bg-red text-white rounded-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
					>
						X
					</button>
				)}
			</div>
		</form>
	);
};

export default AddressForm;
