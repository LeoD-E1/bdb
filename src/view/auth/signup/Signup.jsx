import { useForm, FormProvider } from 'react-hook-form';
import {
	EMAIL_FORM,
	PASSWORD_REGEXP,
	DNI_REGEXP,
} from '../../../constants/regExp';
import {
	REQUIRED_FIELD,
	INVALID_EMAIL_ADDRESS,
	INVALID_DNI_NUMBER,
} from '../../../constants/constants';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../../../api/user/userService';
import { useState } from 'react';
import Spinner from '../../../components/Spinner/Spinner';
import Input from '../../../components/input/Input';
import RoleCheckbox from '../../../components/Content/RoleCheckbox';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';
const { VITE_APP_GOOGLE_MAPS_API_KEY } = import.meta.env;

const libraries = ['places'];

const Signup = () => {
	const fields = {
		common: [
			{
				element: 'input',
				type: 'text',
				label: 'Nombre de usuario',
				placeholder: 'EJ. nombre_apellido',
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
		],
		owner: [
			{
				element: 'input',
				type: 'number',
				label: 'Dni',
				placeholder: '12.345.678',
				name: 'dni',
				constraints: {
					required: {
						value: true,
						message: REQUIRED_FIELD,
					},
					pattern: {
						value: DNI_REGEXP,
						message: INVALID_DNI_NUMBER,
					},
				},
			},
			{
				element: 'input',
				type: 'text',
				label: 'Direccion del local',
				placeholder: 'Av. xyz 1234',
				name: 'address',
				constraints: {
					required: {
						value: true,
						message: REQUIRED_FIELD,
					},
				},
			},
		],
	};

	const roles = [
		{ name: 'Comerciante', id: 1, description: 'Vendedor, dueño de negocio' },
		{
			name: 'Consumidor',
			id: 2,
			description: 'Comprar comidas de los locales',
		},
	];

	const [loading, setLoading] = useState(false);
	const [roleSelected, setRoleSelected] = useState(roles[1]);
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: VITE_APP_GOOGLE_MAPS_API_KEY,
		libraries,
	});
	const navigate = useNavigate();

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
			const { user, status } = await createUser({
				email: data.email,
				password: data.password,
				user_name: data.username,
				role_id: roleSelected.id,
				dni: data.dni,
				user_address: data.address,
			});

			console.log('🚀 ~ file: Signup.jsx:152 ~ onSubmit ~ user', status);
			console.log(user.message);

			if (status >= 200 && status < 300) {
				navigate(`/success-sub`);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	if (!isLoaded) {
		return (
			<div className='loader-div'>
				<Spinner />
			</div>
		);
	}

	return (
		<div className='h-screen max-h-screen w-full'>
			<div className='w-full h-full flex'>
				<div
					className='w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover'
					style={{
						backgroundImage:
							"url('https://images.pexels.com/photos/5903264/pexels-photo-5903264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
					}}
				/>
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
									<section className='w-full grid grid-flow-row sm:grid-cols-2 gap-2'>
										{fields.common.map(field => (
											<Input key={field.name} field={field} />
										))}
									</section>
									<section>
										<label className='text-sm text-black font-kanit'>Soy</label>
										<ul className='grid w-full gap-2 grid-cols-2'>
											{roles.map(role => (
												<li
													className='relative flex items-center mr-4 mb-2 '
													key={role.id}
													onClick={() => setRoleSelected(role)}
												>
													<RoleCheckbox selected={roleSelected} role={role} />
												</li>
											))}
										</ul>
									</section>

									{roleSelected.id === 1 && (
										<section className='w-full grid grid-flow-row sm:grid-cols-2 gap-2'>
											{fields.owner.map(field => {
												if (field.name === 'address') {
													return (
														<Autocomplete key={field.name}>
															<Input key={field.name} field={field} />
														</Autocomplete>
													);
												}
												return <Input key={field.name} field={field} />;
											})}
										</section>
									)}

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
