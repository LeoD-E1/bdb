import CreateCategory from '../Dashboard/e-commerce/products/CreateCategory';
import CreateProduct from '../Dashboard/e-commerce/products/CreateProduct';
import DeleteProduct from '../Dashboard/e-commerce/products/DeleteProduct';
import EditProduct from '../Dashboard/e-commerce/products/EditProduct';
import BarsMenu from '../Header/BarsMenu';
import ChooseAddressModal from './ChooseAddressModal';
import CreateBusiness from '../Dashboard/create-business/CreateBusiness';
import ModalAddresses from './ModalAddresses';

const Modal = ({ modalType, justify = 'start', items = 'center', args }) => {
	const modals = {
		'create-product': <CreateProduct />,
		'edit-product': <EditProduct product={args.product} />,
		'delete-product': <DeleteProduct product={args.product} />,
		'create-category': <CreateCategory />,
		'bars-menu': <BarsMenu />,
		'user-addresses': <ModalAddresses />,
		'choose-address': <ChooseAddressModal />,
		'create-business': <CreateBusiness />,
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
