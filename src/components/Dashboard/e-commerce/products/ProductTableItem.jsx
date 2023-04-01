import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import noImage from '../../../../assets/images/no-image.png';

const ProductTableItem = ({ product, actions }) => {
	const AbailableActions = [
		{ name: 'Edit', icon: faPenToSquare },
		{ name: 'Delete', icon: faTrashCan },
	];

	return (
		<>
			<tr className='bg-lightGrey'>
				<td className='p-3'>
					<div className='flex items-center'>
						<img
							className='rounded-full h-12 w-12   object-cover'
							src={product.image_url ?? noImage}
							alt={product.product_name}
						/>
						<div className='ml-3'>
							<div className='font-semibold'>{product.product_name}</div>
						</div>
					</div>
				</td>
				<td className='p-3 text-sm'>{product.description}</td>
				<td className='p-3'>{product.price}</td>
				<td className='p-3'>
					<div className='flex flex-col justify-center items-center md:flex-row'>
						{AbailableActions.map((action, i) => (
							<span
								key={i}
								className='text-gray-400 mr-2 hover:bg-gray-light p-2 rounded-full'
								onClick={() => actions[action.name](product.product_id)}
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
