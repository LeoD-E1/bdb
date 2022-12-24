import { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const DashboardLayout = ({ children }) => {
	const [isSidebarOpen, setSidebarOpen] = useState(true);

	const handleClose = status => {
		setSidebarOpen(status);
	};

	return (
		<>
			<div className='flex'>
				<Sidebar open={isSidebarOpen} onClose={handleClose} />
				<div className='flex grow h-screen'>{children}</div>
			</div>
			{/* <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} /> */}
		</>
	);
};

export default DashboardLayout;
