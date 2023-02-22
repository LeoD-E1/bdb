const Profile = ({ src, name, description }) => {
	return (
		<div className='flex items-center'>
			<img
				className='object-cover mx-2 rounded-full h-10 w-10'
				src={src}
				alt='avatar-user'
			/>
			<div>
				<h6 className='font-semibold text-md'>{name}</h6>
				{description && (
					<span className='text-sm text-gray font-serif'>{description}</span>
				)}
			</div>
		</div>
	);
};

export default Profile;
