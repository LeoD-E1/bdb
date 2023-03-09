import Google from '../Map/Google';
import CloseModalBtn from './CloseModalBtn';

const ChooseAddressModal = () => {
	return (
		<article className='bg-white shadow-lg rounded-lg p-5 max-w-md w-full h-[500px] relative'>
			<CloseModalBtn />
			<h4 className='text-lg text-dark-gray font-semibold'>
				Search your address
				<div className='w-full h-80'>
					<Google />
				</div>
			</h4>
		</article>
	);
};

export default ChooseAddressModal;
