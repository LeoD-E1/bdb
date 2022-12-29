import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
	const data = {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [
			{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			},
		],
	};

	return (
		<div className='shadow-lg bg-white rounded-lg py-2 my-3'>
			<div className='flex justify-between items-start p-5'>
				<div className=''>
					<h4 className='text-dark-gray text-md font-semibold font-kanit'>
						Traffic source
					</h4>
					<span className='text-gray text-sm'>Monthly traffic source</span>
				</div>
				<div className='p-1 hover:bg-lightGrey rounded-full '>
					<FontAwesomeIcon icon={faEllipsis} className='h-5 w-5' />
				</div>
			</div>
			<Doughnut className='max-w-full' data={data} />
		</div>
	);
};

export default Chart;
