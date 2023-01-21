import {
	faChartSimple,
	faGear,
	faTable,
	faMap,
	faBell,
	faPager,
	faAnglesLeft,
	faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import SideLinks from './SideLinks';

const Sidebar = ({ open, onClose }) => {
	const { pathname } = useLocation();

	const places = [
		{
			id: 0,
			name: 'Dashboard',
			icon: faChartSimple,
			path: '/dashboard',
		},
		{
			id: 1,
			name: 'Settings',
			icon: faGear,
			path: '/dashboard/settings',
		},
		{
			id: 2,
			name: 'Products',
			icon: faTable,
			path: '/dashboard/products',
		},
		{
			id: 3,
			name: 'Map',
			icon: faMap,
			path: '/map',
		},
		{
			id: 4,
			name: 'Notifications',
			icon: faBell,
			path: '/notifications',
		},
		{
			id: 5,
			name: 'Page',
			icon: faPager,
			path: '/landing',
		},
	];

	return (
		<div
			className={`relative h-screen text-white bg-accent font-kanit ${
				open ? 'w-60' : 'w-20'
			}`}
		>
			<div className=' relative flex flex-col justify-between items-center h-[100vh] overflow-y-auto w-full'>
				<div className='flex items-center justify-center'>
					<h1>LOGO</h1>
					{open && <h2 className='text-xl font-bold'>Dashboard</h2>}
				</div>
				<SideLinks items={places} open={open} pathname={pathname} />
				<div
					className={`flex p-10  w-full ${
						open ? 'justify-end' : 'justify-center'
					} hover:bg-darkBlue border-t border-t-[#999]`}
					onClick={() => onClose(!open)}
				>
					<FontAwesomeIcon icon={open ? faAnglesLeft : faAnglesRight} />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
