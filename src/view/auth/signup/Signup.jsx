import { useForm } from 'react-hook-form';
import { EMAIL_FORM, PASSWORD_REGEXP } from '../../../constants/regExp';
import {
	REQUIRED_FIELD,
	INVALID_EMAIL_ADDRESS,
} from '../../../constants/constants';

const Signup = () => {
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const passwordWatcher = watch('password');
	const onSubmit = data => console.log(data);

	const validateConfirm = value => {
		if (value !== passwordWatcher) {
			return 'Passwords do not match';
		}
	};

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
					<h3 className='pt-4 text-2xl text-center'>Create an Account!</h3>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='w-full p-6 bg-white max-w-xl'
					>
						<div className='mb-4 md:flex md:justify-between'>
							<div className='mb-4 md:mr-2 md:mb-0'>
								<label className='block mb-2 text-sm font-bold text-gray-700'>
									First Name
								</label>
								<input
									className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
									name='firstName'
									{...register('firstName')}
									type='text'
									placeholder='First Name'
								/>
								<span className='text-xs italic text-red'>
									{errors.firtsName?.message}
								</span>
							</div>
							<div className='md:ml-2'>
								<label className='block mb-2 text-sm font-bold text-gray-700'>
									Last Name
								</label>
								<input
									className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
									name='lastName'
									{...register('lastName')}
									type='text'
									placeholder='Last Name'
								/>
								<span className='text-xs italic text-red'>
									{errors.lastName?.message}
								</span>
							</div>
						</div>
						<div className='mb-4'>
							<label className='block mb-2 text-sm font-bold text-gray-700'>
								Email
							</label>
							<input
								className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
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
						<div className='mb-4 md:flex md:justify-between'>
							<div className='mb-4 md:mr-2 md:mb-0'>
								<label
									className='block mb-2 text-sm font-bold text-gray-700'
									htmlFor='password'
								>
									Password
								</label>
								<input
									className='w-full max-w-sm px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
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
							<div className='md:ml-2'>
								<label className='block mb-2 text-sm font-bold text-gray-700'>
									Confirm Password
								</label>
								<input
									className='w-full max-w-sm px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
									name='confirm'
									{...register('confirm', {
										required: REQUIRED_FIELD,
										validate: {
											value: value => validateConfirm(value),
										},
									})}
									type='password'
									placeholder='******************'
								/>
								<span className='text-xs italic text-red'>
									{errors.confirm?.message}
								</span>
							</div>
						</div>
						<div className='mb-6 text-center'>
							<button
								className='w-full px-4 py-2 font-bold text-darkBlue bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline'
								type='submit'
							>
								Register
							</button>
						</div>
					</form>
					<div className='text-center'>
						<a
							className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
							href='#'
						>
							Forgot Password?
						</a>
					</div>
					<div className='text-center'>
						<a
							className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
							href='./index.html'
						>
							Already have an account? Login!
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
