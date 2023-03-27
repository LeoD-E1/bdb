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
import { useLocation, useParams } from 'react-router-dom';
import SideLinks from './SideLinks';
import logo from '../../../../public/favicon.png';

const Sidebar = ({ open, onClose }) => {
	const { pathname } = useLocation();
	const { business_id, branch_id } = useParams();
	const basePath = `/business/${business_id}/branch/${branch_id}`;

	const places = [
		{
			id: 0,
			name: 'Tablero',
			icon: faChartSimple,
			path: `${basePath}/dashboard`,
		},
		{
			id: 1,
			name: 'Configuracion',
			icon: faGear,
			path: `${basePath}/settings`,
		},
		{
			id: 2,
			name: 'Productos',
			icon: faTable,
			path: `${basePath}/products`,
		},
		{
			id: 3,
			name: 'Mapa',
			icon: faMap,
			path: `${basePath}/map`,
		},
		{
			id: 4,
			name: 'Notificationes',
			icon: faBell,
			path: `${basePath}/notifications`,
		},
		{
			id: 5,
			name: 'Mi página',
			icon: faPager,
			path: '/',
		},
	];

	return (
		<div
			className={`relative h-screen text-white bg-accent font-kanit ${
				open ? 'w-60' : 'w-20'
			}`}
		>
			<div className=' relative flex flex-col justify-between items-center h-[100vh] overflow-y-auto w-full pt-5'>
				<div className='flex items-center justify-center'>
					<img src={logo} alt='logo-BDB' className='w-14' />
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
