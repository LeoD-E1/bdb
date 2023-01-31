const RoleCheckbox = ({ title, description }) => {
	return (
		<div className='p-2 border border-[#EBEDF0] w-full'>
			<h3 className='text-lg'>{title}</h3>
			<p className='text-sm text-gray-400'>{description}</p>
		</div>
	);
};

export default RoleCheckbox;
