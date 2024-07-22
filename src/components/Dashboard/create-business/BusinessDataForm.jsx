import { IconArrowLeft } from "@tabler/icons-react";
import { useForm } from "react-hook-form";


const BusinessDataForm = ({ prevFn, submitFn, address}) => {

	const { register, handleSubmit } = useForm();

	const saveAddress = data => {
		submitFn({
			businessName: data.business_name,
			phone: data.phone,
		});
	};

	return (
		<section className='m-1 p-3'>
			<article className='relative flex flex-col'>
			<header className='flex gap-2 justify-start my-2 border-b'>
				<IconArrowLeft
					width={40}
					height={40}
					className='p-2 rounded-full hover:bg-gray-100'
					onClick={prevFn}
				/>
				<h3 className='text-2xl font-kanit font-semibold text-dark-gray my-2 text-center'>
				Informacion del Negocio
			</h3>
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
					<label>Nombre del negocio</label>
					<input
						{...register('business_name')}
						type='text'
						name='business_name'
						placeholder='Descripción de la dirección'
						className='w-full px-2 py-1 mt-1 border-b border-gray-100 rounded-sm outline-none focus:border-accent'
					/>
				</div>

				<div className='my-3'>
					<label>Telefono de contacto</label>
					<input
						{...register('phone')}
						type='text'
						name='phone'
						placeholder='+54 011 2345-6789'
						className='w-full px-2 py-1 mt-1 border-b border-gray-100 rounded-sm outline-none focus:border-accent'
					/>
				</div>

				<button
					className='w-auto flex justify-center p-5 text-white my-2 rounded-xl bg-accent'
					onClick={saveAddress}
				>
					Crear negocio
				</button>
			</form>
		</article>
		</section>
	);
};

export default BusinessDataForm;
