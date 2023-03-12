import MultiStepAddressForm from '../Forms/MultiStepAddressForm';
import CloseModalBtn from './CloseModalBtn';

const ChooseAddressModal = () => {
	return (
		<article className='bg-white h-screen w-full shadow-lg md:rounded-lg p-5 md:max-w-2xl md:h-auto md:min-h-[500px] relative'>
			<div>
				<CloseModalBtn />
				<MultiStepAddressForm />
			</div>
		</article>
	);
};

export default ChooseAddressModal;
