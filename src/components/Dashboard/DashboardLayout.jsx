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
			<div className='flex max-h-[100vh] h-full max-w-[100vw]'>
				<Sidebar open={isSidebarOpen} onClose={handleClose} />
				<div className='flex-1 h-screen max-h-screen overflow-y-auto overflow-x-hidden bg-lightGrey'>
					<DashboardNavbar open={isSidebarOpen} onClose={handleClose} />
					<div className='flex w-[100%] p-6'>{children}</div>
				</div>
			</div>
		</>
	);
};

export default DashboardLayout;
