import { useState } from 'react';
import Sidebar from './sidebar/Sidebar';

const DashboardLayout = ({ children }) => {
	const [isSidebarOpen, setSidebarOpen] = useState(true);

	const handleClose = status => {
		setSidebarOpen(status);
	};

	return (
		<>
			<div className='flex'>
				<Sidebar open={isSidebarOpen} onClose={handleClose} />
				<div className='flex grow h-screen border-l-2 ml-2 border-gray-light shadow-xl'>
					{children}
				</div>
			</div>
		</>
	);
};

export default DashboardLayout;
