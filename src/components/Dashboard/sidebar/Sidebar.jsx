import {
	faChartSimple,
	faGear,
	faTable,
	faMap,
	faBell,
	faPager,
} from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import TreeView from './SideLinks';

const Sidebar = ({ open }) => {
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
			path: '/settings',
			children: [
				{
					id: 11,
					name: 'Customers',
					path: '/settings/customers',
					children: [
						{
							id: 110,
							name: 'Customers',
							path: '/settings/customers',
						},
					],
				},
				{
					id: 12,
					name: 'Products',
					path: '/settings/customers',
				},
				{
					id: 13,
					name: 'Products',
					path: '/settings/customers',
				},
				{
					id: 14,
					name: 'Products',
					path: '/settings/customers',
				},
				{
					id: 15,
					name: 'Products',
					path: '/settings/customers',
				},
			],
		},
		{
			id: 2,
			name: 'Tables',
			icon: faTable,
			path: '/tables',
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
			<div className=' relative flex flex-col items-center h-[100vh] overflow-y-auto w-full'>
				<div className='flex items-center justify-between'>
					<h1>LOGO</h1>
					{open && <h2 className='text-xl font-bold'>Dashboard</h2>}
				</div>
				<TreeView items={places} open={open} pathname={pathname} />
			</div>
		</div>
	);
};

export default Sidebar;
