import CreateCategory from '../Dashboard/e-commerce/products/CreateCategory';
import CreateProduct from '../Dashboard/e-commerce/products/CreateProduct';
import BarsMenu from '../Header/BarsMenu';
import ChooseAddressModal from './ChooseAddressModal';
import ModalAddresses from './ModalAddresses';

const Modal = ({ modalType, alignment = 'start' }) => {
	const modals = {
		'create-product': <CreateProduct />,
		'create-category': <CreateCategory />,
		'bars-menu': <BarsMenu />,
		'user-addresses': <ModalAddresses />,
		'choose-address': <ChooseAddressModal />,
	};

	return (
		<div
			className={`absolute z-20 bg-gray-dark bg-opacity-50 w-full h-screen flex justify-${alignment} items-center`}
		>
			{modals[modalType]}
		</div>
	);
};

export default Modal;
