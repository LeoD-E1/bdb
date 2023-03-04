import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { EMAIL_FORM } from '../../../constants/regExp';
import {
	REQUIRED_FIELD,
	INVALID_EMAIL_ADDRESS,
} from '../../../constants/constants';
import Spinner from '../../../components/Spinner/Spinner';
import Input from '../../../components/input/Input';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, getUserInfo } from '../../../api/user/userService';
import { useUserStore } from '../../../store/userStore';

const Login = () => {
	const fields = [
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
			},
		},
	];

	const pushToken = useUserStore(state => state.pushToken);
	const fillWithUser = useUserStore(state => state.fillWithUser);

	const navigate = useNavigate();
	const methods = useForm();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [loginError, setLoginError] = useState({
		status: false,
		message: '',
	});

	const onSubmit = async data => {
		!loading && setLoading(true);
		error && setError(false);
		try {
			const login = await loginUser({
				email: data.email,
				password: data.password,
			});

			if (login.error) {
				setLoginError({ status: true, message: login.message });
			}

			if (login.data.token) {
				pushToken(login.data.token);
				const { user } = await getUserInfo(login.data.token);
				fillWithUser(user);
				user.role !== 'OWNER' ? navigate('/') : navigate('/dashboard');
			}
		} catch (error) {
			console.log(error);
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='loader-div flex-col'>
			{loading ? (
				<Spinner />
			) : (
				<>
					<div className='text-end'>
						<span> ¿Aun no tenés cuenta? </span>
						<Link
							className='inline-block text-sm text-accent align-baseline hover:underline'
							to='/signup'
						>
							Registrarme
						</Link>
					</div>
					<h3 className='text-2xl my-10 text-gray-700'>Ingresar</h3>
					<FormProvider {...methods}>
						<form
							onSubmit={methods.handleSubmit(onSubmit)}
							className='w-full p-6 bg-white max-w-xl'
						>
							<div className='mb-4'>
								{fields.map(field => (
									<Input key={field.name} field={field} />
								))}
							</div>
							<div className='mb-6 text-center'>
								<button
									className='w-full px-4 py-2 font-bold text-white bg-accent rounded-xl'
									type='submit'
								>
									{!loading ? 'Ingresar' : <Spinner />}
								</button>
								{loginError.status && (
									<div className='w-full px-4 py-2 text-red bg-gray-100 mt-3'>
										{loginError.message}
									</div>
								)}
							</div>
						</form>
					</FormProvider>
				</>
			)}
		</div>
	);
};

export default Login;
