import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const CardChart = ({ children, title }) => {
	const [menu, setMenu] = useState(false);
	const [selectedPeriod, setSelectedPeriod] = useState('Monthly');
	const period = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

	return (
		<div className='relative shadow-lg bg-white rounded-lg py-2 my-3'>
			{menu && (
				<div className='absolute top-16 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg'>
					{period.map((period, i) => (
						<div
							key={i}
							className='hover:text-accent'
							onClick={() => {
								setSelectedPeriod(period);
								setMenu(false);
							}}
						>
							<div
								className={`flex items-center p-2 my-1 hover:bg-lightGrey hover:cursor-default ${
									selectedPeriod === period ? 'bg-gray-light' : ''
								}`}
							>
								<span className='mx-4 text-sm hover:text-accent'>{period}</span>
							</div>
						</div>
					))}
				</div>
			)}
			<div className='flex justify-between items-start p-5'>
				<div>
					<h4 className='text-dark-gray text-md font-semibold font-kanit'>
						{title}
					</h4>
					<span className='text-gray text-sm'>
						{' '}
						{selectedPeriod} {title}
					</span>
				</div>
				<div className='p-1 hover:bg-lightGrey rounded-full'>
					<FontAwesomeIcon
						icon={faEllipsis}
						className='h-5 w-5 text-gray'
						onClick={() => setMenu(!menu)}
					/>
				</div>
			</div>
			{children}
		</div>
	);
};

export default CardChart;
