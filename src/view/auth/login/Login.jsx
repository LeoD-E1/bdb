import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { EMAIL_FORM, PASSWORD_REGEXP } from '../../../constants/regExp';
import {
	REQUIRED_FIELD,
	INVALID_EMAIL_ADDRESS,
} from '../../../constants/constants';
import { registerUser } from '../../../api/signup';
import Spinner from '../../../components/Spinner/Spinner';
const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [loading, setLoading] = useState(false);
	const onSubmit = async data => {
		!loading && setLoading(true);
		try {
			const user = await registerUser({
				email: data.email,
				password: data.password,
			});
			console.log(user);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-full p-6 bg-white max-w-xl'
			>
				<div className='mb-4'>
					<label className='block mb-2 text-sm font-bold text-gray-700'>
						Email
					</label>
					<input
						className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:border-accent'
						name='email'
						{...register('email', {
							required: { value: true, message: REQUIRED_FIELD },
							pattern: {
								value: EMAIL_FORM,
								message: INVALID_EMAIL_ADDRESS,
							},
						})}
						type='email'
						placeholder='Email'
					/>
					<span className='text-xs italic text-red'>
						{errors.email?.message}
					</span>
				</div>
				<div className='mb-4 md:mr-2 md:mb-0'>
					<label
						className='block mb-2 text-sm font-bold text-gray-700'
						htmlFor='password'
					>
						Password
					</label>
					<input
						className='w-full max-w-sm px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:border-accent'
						name='password'
						{...register('password', {
							required: {
								value: true,
								message: REQUIRED_FIELD,
							},
							minLength: {
								value: 8,
								message: 'At least 8 Characters',
							},
							maxLength: {
								value: 255,
								message: '255 characters maximum',
							},
							pattern: {
								value: PASSWORD_REGEXP,
								message:
									'It must contain at least 1 number, 1 uppercase letter, 1 lowercase letter',
							},
						})}
						type='password'
						placeholder='******************'
					/>
					<span className='text-xs italic text-red'>
						{errors.password?.message}
					</span>
				</div>
				<div className='mb-6 text-center'>
					<button
						className='w-full px-4 py-2 font-bold text-white bg-accent rounded-xl'
						type='submit'
					>
						{!loading ? 'Register' : <Spinner />}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
