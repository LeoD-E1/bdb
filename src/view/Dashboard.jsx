import React from 'react';
import DashboardLayout from '../components/layout/dashboard/DashboardLayout';

const Dashboard = () => {
	return (
		<div className='flex justify-center items-center w-full h-screen'>
			<h1>Dashboard</h1>
		</div>
	);
};

const DashboardView = () => (
	<DashboardLayout>
		<Dashboard />
	</DashboardLayout>
);

export default DashboardView;
