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

	return (
		<div key={field.name} className='flex flex-col my-3'>
			<label className='text-sm text-black font-kanit font-semibold'>
				{field.label}
			</label>
			<div className='flex items-center'>
				<input
					className='w-full p-4 mb-1 text-sm text-gray-500 font-kanit font-semibold leading-tight bg-lightGrey border rounded-lg focus:outline-none focus:border-accent border-transparent'
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
						className='w-5 mx-1'
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
