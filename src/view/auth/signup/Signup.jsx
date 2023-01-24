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

const Signup = () => {
	const [loading, setLoading] = useState(false);

	const methods = useForm();

	const confirmWatch = methods.watch('password');
	const validateConfirm = value => {
		if (value !== confirmWatch) {
			return 'Passwords do not match';
		}
	};

	const onSubmit = async data => {
		!loading && setLoading(true);
		try {
			const user = await createUser({
				email: data.email,
				password: data.password,
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
		{
			element: 'input',
			type: 'password',
			label: 'Confirm',
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
							<h3 className='text-2xl my-10 text-gray-700'>Create account</h3>
							<FormProvider {...methods}>
								<form
									onSubmit={methods.handleSubmit(onSubmit)}
									className='w-full bg-white max-w-xl lg:px-3'
								>
									{fields.map(field => (
										<Input key={field.name} field={field} />
									))}
									<div className='mb-6 text-center'>
										<button
											className='w-full p-4 font-bold text-white bg-accent rounded-xl'
											type='submit'
										>
											Create account
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
