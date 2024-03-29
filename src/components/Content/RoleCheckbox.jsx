const RoleCheckbox = ({ role, selected }) => {
	const isSelected = selected.id === role.id && 'bg-[#EBEBED] border-accent';
	return (
		<div
			className={`p-2 border  w-full hover:cursor-pointer hover:bg-gray-100 rounded-lg ${isSelected}`}
		>
			<h3 className='text-lg text-gray-600'>{role.name}</h3>
			<p className='text-sm text-gray-400'>{role.description}</p>
		</div>
	);
};

export default RoleCheckbox;
