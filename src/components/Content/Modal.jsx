import CreateCategory from '../Dashboard/e-commerce/products/CreateCategory';
import CreateProduct from '../Dashboard/e-commerce/products/CreateProduct';
import EditProduct from '../Dashboard/e-commerce/products/EditProduct';
import BarsMenu from '../Header/BarsMenu';
import ChooseAddressModal from './ChooseAddressModal';
import ModalAddresses from './ModalAddresses';

const Modal = ({ modalType, justify = 'start', items = 'center', args }) => {
	const modals = {
		'create-product': <CreateProduct />,
		'edit-product': <EditProduct product={args} />,
		'create-category': <CreateCategory />,
		'bars-menu': <BarsMenu />,
		'user-addresses': <ModalAddresses />,
		'choose-address': <ChooseAddressModal />,
	};

	return (
		<div
			className={`fixed z-20 bg-gray-dark bg-opacity-50 w-full h-screen flex justify-${justify} items-${items}`}
		>
			{modals[modalType]}
		</div>
	);
};

export default Modal;
