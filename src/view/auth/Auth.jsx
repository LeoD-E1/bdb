import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { INVALID_EMAIL_ADDRESS } from '../../constants/constants';
import { EMAIL_FORM } from '../../constants/regExp';
import { supabase } from '../../helper/supabaseClient';

export default function Auth() {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleLogin = async e => {
		try {
			setLoading(true);
			const { error } = await supabase.auth.signInWithOtp({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='flex justify-center items-center h-screen'>
			<div
				className='bg-gray-light shadow-xl p-5 rounded-lg'
				aria-live='polite'
			>
				<article className='p-2'>
					<p className='text-lg text-accent font-kanit'>Sign in</p>
				</article>
				{loading ? (
					<h4 className='text-sm text-accent font-kanit'>
						Sending magic link...
					</h4>
				) : (
					<form
						onSubmit={handleSubmit(handleLogin)}
						className='flex flex-col justify-start'
					>
						<label htmlFor='email' className='px-2 text-gray-400'>
							Email
						</label>
						<input
							{...register('email', {
								required: INVALID_EMAIL_ADDRESS,
								pattern: {
									value: EMAIL_FORM,
									message: 'the email provided is not valid',
								},
							})}
							id='email'
							name='email'
							className='px-10 py-3 my-2 rounded-lg outline-none focus:border-accent border-transparent border'
							type='email'
							placeholder='Your email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							required={true}
						/>
						<span className='text-sm font-kanit text-red'>
							{errors.email?.message}
						</span>
						<button
							className='p-3 bg-accent rounded-lg text-white'
							aria-live='polite'
						>
							Send magic link
						</button>
					</form>
				)}
			</div>
		</div>
	);
}
