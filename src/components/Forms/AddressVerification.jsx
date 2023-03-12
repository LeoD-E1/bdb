import Google from '../Map/Google';
import { IconArrowLeft } from '@tabler/icons-react';

const AddressVerification = ({ prevFn, nextFn, address }) => {
	const handleConfirmClick = () => {
		nextFn();
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
				<h2 className='text-3xl'>Verifica la ubicación</h2>
			</header>
			<div className='w-full h-[280px]'>
				<Google address={address} />
			</div>
			<span className='p-3'>{address.formatted_address}</span>

			<button
				className='w-auto flex justify-center p-5 text-white my-2 rounded-xl bg-accent'
				onClick={handleConfirmClick}
			>
				Confirmar dirección
			</button>
		</article>
	);
};

export default AddressVerification;
