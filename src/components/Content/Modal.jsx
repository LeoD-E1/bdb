import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useModalStore } from '../../store/modalStore';
import CreateCategory from '../Dashboard/e-commerce/products/CreateCategory';
import CreateProduct from '../Dashboard/e-commerce/products/CreateProduct';

const Modal = ({ modalType }) => {
	const updateVisibility = useModalStore(state => state.updateVisibility);
	const modals = {
		'create-product': CreateProduct,
		'create-category': CreateCategory,
	};

	return (
		<div className='absolute z-20 bg-gray-dark bg-opacity-70 flex justify-center items-center w-full h-screen'>
			<div className='relative p-5'>
				<FontAwesomeIcon
					className='absolute top-0 -right-3 h-5 w-5 hover:bg-white p-2 rounded-full'
					icon={faXmark}
					onClick={() => updateVisibility(false)}
				/>
				{modals[modalType]()}
			</div>
		</div>
	);
};

export default Modal;
