import React from 'react';
import DashboardLayout from '../components/Dashboard/DashboardLayout';
import ResumeCards from '../components/Dashboard/e-commerce/ResumeCards';
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
