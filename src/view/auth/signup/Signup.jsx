import { useForm, FormProvider } from 'react-hook-form';
import { EMAIL_FORM, PASSWORD_REGEXP } from '../../../constants/regExp';
import {
	REQUIRED_FIELD,
	INVALID_EMAIL_ADDRESS,
} from '../../../constants/constants';
import { Link } from 'react-router-dom';
import { createUser } from '../../../api/user/userService';
import { useState } from 'react';
import Spinner from '../../../components/Spinner/Spinner';
import Input from '../../../components/input/Input';
import RoleCheckbox from '../../../components/Content/RoleCheckbox';

const Signup = () => {
	const [loading, setLoading] = useState(false);

	const methods = useForm();

	const confirmWatch = methods.watch('password');
	const validateConfirm = value => {
		if (value !== confirmWatch) {
			return 'Las contraseñas no coinciden';
		}
	};

	const onSubmit = async data => {
		!loading && setLoading(true);
		try {
			const user = await createUser({
				email: data.email,
				password: data.password,
				first_name: data.first_name,
				last_name: data.last_name,
			});
			console.log(user.message);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const fields = [
		{
			element: 'input',
			type: 'text',
			label: 'Nombre de usuario',
			placeholder: 'nombre_apellido',
			name: 'username',
			constraints: {},
		},
		{
			element: 'input',
			type: 'email',
			label: 'Email',
			placeholder: 'Jorge.perez@email.com',
			name: 'email',
			constraints: {
				required: { value: true, message: REQUIRED_FIELD },
				pattern: {
					value: EMAIL_FORM,
					message: INVALID_EMAIL_ADDRESS,
				},
			},
		},
		{
			element: 'input',
			type: 'password',
			label: 'Contraseña',
			placeholder: '*******************',
			name: 'password',
			constraints: {
				required: {
					value: true,
					message: REQUIRED_FIELD,
				},
				minLength: {
					value: 8,
					message: 'Al menor 8 caracteres',
				},
				maxLength: {
					value: 255,
					message: 'maximo 255 caracteres',
				},
				pattern: {
					value: PASSWORD_REGEXP,
					message:
						'Al menos debe contener 1 numero, 1 letra mayuscula, 1 letra minúscula',
				},
			},
		},
		{
			element: 'input',
			type: 'password',
			label: 'Repetí tu contraseña',
			placeholder: '*******************',
			name: 'confirm',
			constraints: {
				required: {
					value: true,
					message: REQUIRED_FIELD,
				},
				validate: {
					value: value => validateConfirm(value),
				},
			},
		},
	];

	const roles = [
		{ name: 'Comerciante', id: 1 },
		{ name: 'Consumidor', id: 2 },
	];

	return (
		<div className='h-screen max-h-screen w-full'>
			<div className='w-full h-full flex'>
				<div
					className='w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover'
					style={{
						backgroundImage:
							"url('https://images.pexels.com/photos/5903264/pexels-photo-5903264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
					}}
				></div>
				<div className='w-full flex flex-col items-center justify-center lg:w-7/12 bg-white p-5'>
					{loading ? (
						<Spinner />
					) : (
						<>
							<div className='text-end'>
								<span> ¿Ya estás registrado? </span>
								<Link
									className='inline-block text-sm text-accent align-baseline hover:underline'
									to='/login'
								>
									Ingresar
								</Link>
							</div>
							<h3 className='text-2xl my-10 text-gray-700'>Crear cuenta</h3>
							<FormProvider {...methods}>
								<form
									onSubmit={methods.handleSubmit(onSubmit)}
									className='w-full bg-white max-w-xl lg:px-3'
								>
									<div className='w-full grid grid-flow-row sm:grid-cols-2 gap-2'>
										{fields.map(field => (
											<Input key={field.name} field={field} />
										))}
										<section>
											<label className='text-sm text-black font-kanit font-semibold'>
												Soy
											</label>
											<ul className='grid w-full gap-2 grid-cols-2'>
												{roles.map(role => (
													<li
														className='relative flex items-center mr-4 mb-2'
														key={role.id}
													>
														<RoleCheckbox
															title={role.name}
															description={'cacs'}
														/>
													</li>
												))}
											</ul>
										</section>
									</div>

									<div className='mb-6 text-center'>
										<button
											className='w-full p-4 font-bold text-white bg-accent rounded-xl'
											type='submit'
										>
											Crear cuenta
										</button>
									</div>
								</form>
							</FormProvider>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Signup;
