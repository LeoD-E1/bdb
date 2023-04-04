import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const SideItem = ({ item, pathname, open }) => {
	return (
		<Link
			to={item.path}
			className={`flex w-full items-center p-4 rounded-md hover:bg-darkBlue ${
				item.path === pathname && 'text-green'
			}`}
		>
			<FontAwesomeIcon icon={item.icon} className='w-5 h-5' />
			{open && (
				<div className='mx-5'>
					<span
						className={`mx-4 text-white ${
							item.path === pathname && 'text-green'
						}`}
					>
						{item.name}
					</span>
				</div>
			)}
		</Link>
	);
};

export default SideItem;
