import InputAutocomplete from '../input/InputAutocomplete';

const FindAddress = ({ nextFn }) => {
	const retrieveAddress = address => {
		nextFn(address);
	};
	return (
		<article>
			<h4 className='text-2xl text-dark-gray font-semibold'>
				Veamos que tenes cerca
			</h4>
			<InputAutocomplete retrieveAddress={retrieveAddress} />
		</article>
	);
};

export default FindAddress;
