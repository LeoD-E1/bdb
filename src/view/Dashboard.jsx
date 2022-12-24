import React from 'react';
import DashboardLayout from '../components/layout/dashboard/DashboardLayout';
import ResumeCards from '../components/layout/dashboard/e-commerce/ResumeCards';

const Dashboard = () => {
	return (
		<div className='w-full p-5'>
			<ResumeCards />
		</div>
	);
};

const DashboardView = () => (
	<DashboardLayout>
		<Dashboard />
	</DashboardLayout>
);

export default DashboardView;
