import React from 'react';
import CreateProduct from '../Dashboard/e-commerce/products/CreateProduct';

const Modal = ({ modalType }) => {
	const modals = {
		'create-product': CreateProduct,
	};

	return (
		<div className='absolute z-20 bg-gray-dark bg-opacity-70 flex justify-center items-center w-full h-screen'>
			{modals[modalType]()}
		</div>
	);
};

export default Modal;
