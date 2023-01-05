import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Categories = ({ categories, setCategory }) => {
	return (
		<div className='bg-white w-full h-auto p-2 shadow-lg'>
			<div className='my-2'>
				<button className='p-2 w-full text-white rounded-md bg-accent font-kanit text-md font-semibold'>
					+ Add new
				</button>
			</div>
			{categories.map((category, i) => (
				<div
					key={i}
					className='flex justify-start p-3 hover:bg-gray-100 hover:cursor-default'
					onClick={() => setCategory(category)}
				>
					<FontAwesomeIcon icon={faCircle} className='h-5 w-5 text-accent' />
					<h4 className='text-md font-kanit text-gray font-semibold ml-3'>
						{category}
					</h4>
				</div>
			))}
		</div>
	);
};

export default Categories;
