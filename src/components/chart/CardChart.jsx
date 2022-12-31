import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CardChart = ({ children, title }) => {
	return (
		<div className='shadow-lg bg-white rounded-lg py-2 my-3'>
			<div className='flex justify-between items-start p-5'>
				<div>
					<h4 className='text-dark-gray text-md font-semibold font-kanit'>
						{title}
					</h4>
					<span className='text-gray text-sm'>Monthly {title}</span>
				</div>
				<div className='p-1 hover:bg-lightGrey rounded-full'>
					<FontAwesomeIcon icon={faEllipsis} className='h-5 w-5' />
				</div>
			</div>
			{children}
		</div>
	);
};

export default CardChart;
