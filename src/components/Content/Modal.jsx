import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModalStore } from '../../store/modalStore';
import CreateCategory from '../Dashboard/e-commerce/products/CreateCategory';
import CreateProduct from '../Dashboard/e-commerce/products/CreateProduct';
import BarsMenu from '../Header/BarsMenu';

const Modal = ({ modalType }) => {
	const updateVisibility = useModalStore(state => state.updateVisibility);
	const modals = {
		'create-product': CreateProduct,
		'create-category': CreateCategory,
		'bars-menu': BarsMenu,
	};

	return (
		<div className='absolute z-20 bg-gray-dark bg-opacity-70 w-full h-screen'>
			<div className='relative'>
				<FontAwesomeIcon
					className='absolute top-0 z-30 h-5 w-5 text-red hover:bg-white p-2 rounded-full'
					icon={faXmark}
					onClick={() => updateVisibility(false)}
				/>
				{modals[modalType]()}
			</div>
		</div>
	);
};

export default Modal;
