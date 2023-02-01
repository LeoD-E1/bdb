import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const Input = ({ field }) => {
	const [show, setShow] = useState(false);
	const [type, setType] = useState('password');
	const {
		formState: { errors },
		register,
	} = useFormContext();

	const required = field.constraints?.required?.value;

	return (
		<div key={field.name} className='flex flex-col my-3'>
			<label className='text-sm text-black font-kanit '>
				{field.label}
				{required && <span className='text-red text-md'> *</span>}
			</label>
			<div className='relative flex items-center'>
				<input
					className='w-full p-4 pr-7 mb-1 text-sm text-gray-500 font-kanit font-semibold leading-tight focus:outline-none focus:border-accent border-transparent border rounded-lg  bg-lightGrey'
					name={field.name}
					type={
						field.name !== 'password' && field.name !== 'confirm'
							? field.type
							: type
					}
					{...register(field.name, {
						...field.constraints,
					})}
					placeholder={field.placeholder}
				/>
				{(field.name === 'password' || field.name === 'confirm') && (
					<FontAwesomeIcon
						icon={show ? faEye : faEyeSlash}
						className='w-5 mx-1 text-gray-400 absolute right-0'
						onClick={() => {
							setShow(!show);
							show ? setType('password') : setType('text');
						}}
					/>
				)}
			</div>
			<span className='text-xs text-red font-kanit'>
				{errors[field.name] && errors[field.name].message}
			</span>
		</div>
	);
};

export default Input;
