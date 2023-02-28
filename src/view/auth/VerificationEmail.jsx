import { requestEmail } from '../../api/user/userService';

const VerificationEmail = () => {
	const resendEmail = async () => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'));
			await requestEmail(userData);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='loader-div bg-gray-700'>
			<div className='flex flex-col max-w-lg gap-5 text-center'>
				<h2 className='text-4xl text-white font-kanitExtraBold'>
					¡Gracias por suscribirte a{' '}
					<span className='font-marker text-4xl text-white'>
						Bocado de Barrio
					</span>
					!
				</h2>
				<p className='font-kanit text-lg text-gray-100'>
					Hemos enviado un email a tu correo, por favor para poder continuar
					debes confirmarlo.
				</p>
				<p className='font-kanit text-lg text-gray-100'>
					Este paso es necesario para finalizar. Por las dudas, acordate de
					revisar la carpeta de spam
				</p>

				<span className='font-kanit text-md text-gray'>
					¿Recibiste el email?
				</span>

				<button
					onClick={resendEmail}
					className='w-full p-2 font-bold text-white bg-accent rounded-xl'
				>
					Reenviar Email
				</button>

				<span className='font-kanit text-md text-gray'>
					Una vez recibas el email, ya podes cerrar esta ventana y continuar
					desde ahi
				</span>
			</div>
		</div>
	);
};

export default VerificationEmail;
