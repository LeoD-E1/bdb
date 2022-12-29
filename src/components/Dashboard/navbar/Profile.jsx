import React from 'react';

const Profile = ({ src, name, profession }) => {
	return (
		<>
			<img
				className='object-cover mx-2 rounded-full h-10 w-10'
				src={src}
				alt='avatar-user'
			/>
			<div className='hidden lg:block'>
				<h6 className='font-semibold text-md'>{name}</h6>
				{profession && (
					<span className='text-sm text-gray font-serif'>{profession}</span>
				)}
			</div>
		</>
	);
};

export default Profile;
