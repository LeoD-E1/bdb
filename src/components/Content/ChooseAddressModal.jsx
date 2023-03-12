import { useAddressStore } from '../../store/addressStore';
import InputAutocomplete from '../input/InputAutocomplete';
import Google from '../Map/Google';
import CloseModalBtn from './CloseModalBtn';

const ChooseAddressModal = () => {
	const address = useAddressStore(state => state.address);
	return (
		<article className='bg-white h-screen w-full shadow-lg md:rounded-lg p-5 md:max-w-3xl md:h-[500px] relative'>
			<div className='w-full flex justify-end'>
				<CloseModalBtn />
			</div>
			<h4 className='text-lg text-dark-gray font-semibold'>
				Veamos que tenes cerca
			</h4>
			<div className='p-3 '>
				<InputAutocomplete />
			</div>
			{address && (
				<div className='w-full h-[300px]'>
					<Google address={address} />
				</div>
			)}
		</article>
	);
};

export default ChooseAddressModal;
