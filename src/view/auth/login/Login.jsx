import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { EMAIL_FORM } from '../../../constants/regExp';
import {
	REQUIRED_FIELD,
	INVALID_EMAIL_ADDRESS,
} from '../../../constants/constants';
import Spinner from '../../../components/Spinner/Spinner';
import Input from '../../../components/input/Input';
import { Link /* useNavigate */ } from 'react-router-dom';
import { loginUser, getUserInfo } from '../../../api/user/userService';

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

	// const navigate = useNavigate();
	const methods = useForm();
	const [loading, setLoading] = useState(false);

	const onSubmit = async data => {
		!loading && setLoading(true);
		try {
			const user = await loginUser({
				email: data.email,
				password: data.password,
			});
			localStorage.setItem('token', JSON.stringify(user.data.token));
			const dataUser = await getUserInfo(user.data.token);
			console.log('🚀 ~ file: Login.jsx:57 ~ onSubmit ~ dataUser', dataUser);
			// navigate('/');
		} catch (error) {
			console.log(error);
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
							</div>
						</form>
					</FormProvider>
				</>
			)}
		</div>
	);
};

export default Login;
