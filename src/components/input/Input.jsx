// import { useReducer } from 'react';
import { useFormContext } from 'react-hook-form';

// import { inputReducer } from './inputReducer';

const Input = ({ type, label, placeholder, name, constraints }) => {
	// const [inputState, dispatch] = useReducer(inputReducer, { value: '' });

	// const changeHandler = event => {
	// 	dispatch({ type: 'CHANGE', val: event.target.value });
	// };

	const {
		register,
		formState: { errors },
	} = useFormContext();

	const constraintsCopy =
		constraints && JSON.parse(JSON.stringify(constraints));

	const TextBoxElement = (
		<div className='flex flex-col '>
			<input
				className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-400 border rounded  appearance-none focus:outline-none focus:border-accent'
				name={name}
				type={type}
				{...register(name, {
					constraintsCopy,
				})}
				placeholder={placeholder}
				// id={id}
				// onChange={changeHandler}
				// value={inputState.value}
			/>
			<span className='text-xs italic text-red'>{errors.name?.message}</span>
		</div>
	);
	return (
		<div>
			<label className='block mb-1 text-sm font-bold text-gray-400'>
				{label}
			</label>
			{TextBoxElement}
		</div>
	);
};

export default Input;
