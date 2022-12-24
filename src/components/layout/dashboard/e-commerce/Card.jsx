import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
	const { number, icon, title, difference, to } = item;
	return (
		<div className='flex flex-col rounded shadow-lg overflow-hidden p-3'>
			{/* Card Body: Simple Widget with Action */}
			<div className='flex justify-between items-center'>
				<span className='font-kanit text-sm text-gray-500 tracking-wider'>
					{title}
				</span>

				<span>{difference}%</span>
			</div>
			<div className='flex justify-between items-center'>
				<FontAwesomeIcon
					icon={icon}
					className='hi-solid hi-arrow-circle-down inline-block w-4 h-4'
				/>
				<span className='text-2xl font-semibold'>{number}</span>
			</div>
			<Link
				to={to}
				className='block p-3 font-medium text-sm text-center bg-gray-50 hover:bg-gray-100 hover:bg-opacity-75 active:bg-gray-50 text-blue-600 hover:text-blue-500'
			>
				View more
			</Link>
			{/* END Action Link */}
		</div>
	);
};

export default Card;
