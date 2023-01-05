import React from 'react';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductTableItem = ({ product, actions }) => {
	const AbailableActions = [
		{ name: 'Edit', icon: faPenToSquare },
		{ name: 'Delete', icon: faTrashCan },
	];

	const color = {
		low: 'bg-yellow',
		no: 'bg-red',
		many: 'bg-green',
	};

	return (
		<>
			<tr className='bg-lightGrey'>
				<td className='p-3'>
					<div className='flex items-center'>
						<img
							className='rounded-full h-12 w-12   object-cover'
							src={product.image_url}
							alt={product.name}
						/>
						<div className='ml-3'>
							<div className='font-semibold'>{product.name}</div>
						</div>
					</div>
				</td>
				<td className='p-3'>{product.price}</td>
				<td className='p-3 font-bold'>{product.stock}</td>
				<td className='p-3'>
					<span
						className={`${
							color[product.status]
						} text-white text-sm rounded-md px-1`}
					>
						{product.status} stock
					</span>
				</td>
				<td className='p-3'>
					<div className='flex flex-col justify-center items-center md:flex-row'>
						{AbailableActions.map((action, i) => (
							<span
								key={i}
								className='text-gray-400 mr-2 hover:bg-gray-light p-2 rounded-full'
								onClick={() => actions[action.name](product.id)}
							>
								<FontAwesomeIcon icon={action.icon} className='w-4 h-4' />
							</span>
						))}
					</div>
				</td>
			</tr>
		</>
	);
};

export default ProductTableItem;
