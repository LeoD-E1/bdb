import React from 'react';
import DashboardLayout from '../components/layout/dashboard/DashboardLayout';
import ResumeCards from '../components/layout/dashboard/e-commerce/ResumeCards';
import Chart from '../components/chart/Chart';

const Dashboard = () => {
	return (
		<div className='w-full'>
			<ResumeCards />
			<Chart />
		</div>
	);
};

const DashboardView = () => (
	<DashboardLayout>
		<Dashboard />
	</DashboardLayout>
);

export default DashboardView;
