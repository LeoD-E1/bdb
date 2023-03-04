import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModalStore } from '../../store/modalStore';

const CloseModalBtn = () => {
	const updateVisibility = useModalStore(state => state.updateVisibility);
	return (
		<FontAwesomeIcon
			className='h-5 w-5 text-black p-2 rounded-full hover:bg-lightGrey'
			icon={faXmark}
			onClick={() => updateVisibility(false)}
		/>
	);
};

export default CloseModalBtn;
