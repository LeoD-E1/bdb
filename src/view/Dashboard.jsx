import React from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import ResumeCards from '../components/Dashboard/e-commerce/ResumeCards';
import Chart from '../components/chart/Chart';

const Dashboard = () => {
	return (
		<div className='w-full'>
			<ResumeCards />
			<div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 my-3'>
				<div className='lg:col-span-2'></div>
				<div className='lg:col-span-2'>
					<Chart />
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
