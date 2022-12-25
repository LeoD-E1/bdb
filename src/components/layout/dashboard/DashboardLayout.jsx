import { useState } from 'react';
import DashboardNavbar from './navbar/DashboardNavbar';
import Sidebar from './sidebar/Sidebar';

const DashboardLayout = ({ children }) => {
	const [isSidebarOpen, setSidebarOpen] = useState(true);

	const handleClose = status => {
		setSidebarOpen(status);
	};

	return (
		<>
			<div className='flex max-h-[100vh]'>
				<Sidebar open={isSidebarOpen} onClose={handleClose} />
				<div className='flex-1 h-screen'>
					<DashboardNavbar />
					<div className='flex w-[100%] p-3'>{children}</div>
				</div>
			</div>
		</>
	);
};

export default DashboardLayout;
