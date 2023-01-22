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
// import {useForm} from '../../../Hook/form-hook';

const Signup = () => {
	const [loading, setLoading] = useState(false);

	const methods = useForm();

	const onSubmit = async data => {
		console.log('🚀 ~ file: Signup.jsx:28 ~ onSubmit ~ data', data);
		!loading && setLoading(true);
		try {
			const user = await createUser({
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

	const fields = [
		{
			element: 'input',
			type: 'text',
			label: 'First Name',
			placeholder: 'John',
			name: 'first_name',
			constraints: {},
		},
		{
			element: 'input',
			type: 'text',
			label: 'Last Name',
			placeholder: 'Smith',
			name: 'last_name',
			constraints: {},
		},
		{
			element: 'input',
			type: 'email',
			label: 'Email',
			placeholder: 'John.Smith@email.com',
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
			label: 'Password',
			placeholder: '*******************',
			name: 'password',
			constraints: {
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
			},
		},
	];

	return (
		<div className='h-screen max-h-screen w-full'>
			<div className='w-full h-full flex'>
				<div
					className='w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover'
					style={{
						backgroundImage:
							"url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')",
					}}
				></div>
				<div className='w-full flex flex-col items-center justify-center lg:w-7/12 bg-white p-5'>
					{loading ? (
						<Spinner />
					) : (
						<>
							<div className='text-end'>
								<Link
									className='inline-block text-sm text-accent align-baseline hover:underline'
									to='/login'
								>
									Already have an account?
								</Link>
							</div>
							<h3 className='text-2xl my-10 text-gray-700'>Sign up</h3>
							<FormProvider {...methods}>
								<form
									onSubmit={methods.handleSubmit(onSubmit)}
									className='w-full bg-white max-w-xl lg:px-3'
								>
									{fields.map(field => (
										<Input
											key={field.name}
											constraints={field.constraints}
											element={field.element}
											label={field.label}
											name={field.name}
											placeholder={field.placeholder}
											type={field.type}
										/>
									))}
									<div className='mb-6 text-center'>
										<button
											className='w-full px-4 py-2 font-bold text-white bg-accent rounded-xl'
											type='submit'
										>
											Register
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
