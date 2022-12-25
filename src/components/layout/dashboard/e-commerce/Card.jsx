import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
	const { number, icon, title, difference, to } = item;

	return (
		<div className='flex flex-col rounded shadow-lg overflow-hidden px-3 py-5'>
			<div className='flex justify-between items-center py-2'>
				<span className='font-kanit text-sm text-gray'>{title}</span>

				<span className={`${difference < 0 ? 'text-red' : 'text-green'}`}>
					{difference}%
				</span>
			</div>
			<div className='flex justify-around items-center py-2'>
				<FontAwesomeIcon
					icon={icon}
					className='w-6 h-6 text-gray rounded-full bg-gray p-4 bg-opacity-20'
				/>
				<span className='text-3xl'> {number}</span>
			</div>
			<Link to={to} className='block text-sm text-center text-accent py-2'>
				view more
			</Link>
		</div>
	);
};

export default Card;
