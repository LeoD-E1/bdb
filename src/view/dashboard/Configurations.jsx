import React from 'react';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';

const Configurations = () => {
	return (
		<div className='w-full'>
			<h1>Configurations</h1>
		</div>
	);
};

const ConfigView = () => (
	<DashboardLayout>
		<Configurations />
	</DashboardLayout>
);

export default ConfigView;
