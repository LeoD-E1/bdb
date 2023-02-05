const VerificationEmail = () => {
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
					Hemos enviado un mensaje a tu correo, por favor para poder continuar
					debes confirmarlo.
				</p>
			</div>
		</div>
	);
};

export default VerificationEmail;
