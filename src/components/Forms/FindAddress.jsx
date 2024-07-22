import InputAutocomplete from '../input/InputAutocomplete';

const FindAddress = ({ title, retrieveAddress, nextFn }) => {
	return (
		<article>
			{title && (
				<h4 className='text-2xl text-dark-gray font-semibold'>{title}</h4>
			)}
			<InputAutocomplete
				retrieveAddress={retrieveAddress}
				placeholder='Av. Julio Arg. Roca 3421'
				label={false}
			/>
			<button
				className='w-auto flex justify-center p-5 text-white my-2 rounded-xl bg-accent'
				onClick={nextFn}
			>
				Siguiente
			</button>
		</article>
	);
};

export default FindAddress;
