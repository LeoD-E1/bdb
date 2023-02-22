const Profile = ({ src, name, description }) => {
	return (
		<>
			<img
				className='object-cover mx-2 rounded-full h-10 w-10'
				src={src}
				alt='avatar-user'
			/>
			<div className='hidden lg:block'>
				<h6 className='font-semibold text-md'>{name}</h6>
				{description && (
					<span className='text-sm text-gray font-serif'>{description}</span>
				)}
			</div>
		</>
	);
};

export default Profile;
