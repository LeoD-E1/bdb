import React from 'react';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import ResumeCards from '../../components/Dashboard/e-commerce/ResumeCards';
import DoughnutChart from '../../components/chart/DoughnutChart';
import LineChart from '../../components/chart/LineChart';
import CardChart from '../../components/chart/CardChart';

const Dashboard = () => {
	return (
		<div className='w-full'>
			<h3 className='text-xl text-gray font-semibold'>E-commerce</h3>
			<ResumeCards />
			<div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 my-3'>
				<div className='lg:col-span-2'>
					<CardChart title={'Traffic source'}>
						<LineChart />
					</CardChart>
				</div>
				<div className='lg:col-span-2'>
					<CardChart title={'Traffic source'}>
						<DoughnutChart />
					</CardChart>
				</div>
			</div>
		</div>
	);
};

const DashboardView = () => (
	<DashboardLayout>
		<Dashboard />
	</DashboardLayout>
);

export default DashboardView;
