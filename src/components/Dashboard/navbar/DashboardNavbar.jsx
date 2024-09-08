import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUserStore } from '../../../store/userStore';
import { faBell, faEnvelope, faGear } from '@fortawesome/free-solid-svg-icons';
import ProfileDropdown from './ProfileDropdown';
import { useBusinessStore } from '../../../store/businessStore';
import { IconCaretDown } from '@tabler/icons-react';

const DashboardNavbar = () => {
	const user = useUserStore(state => state.user);
	console.log("🚀 ~ DashboardNavbar ~ user:", user)
	const selectedBusiness = useBusinessStore(state => state.selectedBusiness);

	const options = [
		{ icon: faGear, label: 'Settings' },
		{ icon: faEnvelope, label: 'Messages' },
		{ icon: faBell, label: 'Notifications' },
	];

	return (
		<div className='p-2 flex justify-between items-center border-b border-b-[#eee] bg-white '>
			<div className='flex items-center '>
				<div className='flex justify-center items-center'>
					<div className='flex items-center ml-3'>
						<input
							type='search'
							className='w-full m-2 py-2 pl-4 pr-4 font-bold border-none bg-lightGrey bg-opacity-70 focus:outline-none rounded-lg text-gray'
							placeholder='Search'
						/>
					</div>
				</div>
			</div>

			{selectedBusiness && (
				<section
					className='flex hover:cursor-default items-center hover:text-green'
					onClick={() => console.log('action')}
				>
					<h3 className='font-kanit text-sm md:text-md text-dark-gray font-bold'>
						{selectedBusiness.business_name} -{' '}
						{selectedBusiness.branch[0].branch_address.split(',')[0]}
					</h3>
					<IconCaretDown className='text-sm mx-1 w-5 h-5' />
				</section>
			)}

			<div className='flex items-center justify-around'>
				{options.map((option, i) => (
					<div className='relative' key={i}>
						<FontAwesomeIcon
							className='h-5 w-5 text-gray hover:text-green text-lg p-2 rounded-full relative'
							icon={option.icon}
						/>
						<span className='absolute top-0 right-0 h-2 w-2 rounded-full bg-green flex justify-center items-center'></span>
					</div>
				))}
				<div>
					<ProfileDropdown user={user} />
				</div>
			</div>
		</div>
	);
};

export default DashboardNavbar;
