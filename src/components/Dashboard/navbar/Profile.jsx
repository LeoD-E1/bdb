import { IconUser } from '@tabler/icons-react';

const Profile = ({ src, name, description, size = 7, col = false }) => {
	return (
		<div
			className={`flex ${col && 'flex-col'} items-center justify-center p-2`}
		>
			<div className={`h-${size} w-${size} mx-2`}>
				{src ? (
					<img
						className='rounded-full border border-transparent w-full h-full object-cover'
						src={src}
						alt='avatar-user'
					/>
				) : (
					<IconUser width={25} height={25} />
				)}
			</div>
			<div className='flex items-center flex-col'>
				<h6 className='font-semibold text-md'>{name}</h6>
				{description && (
					<span className='text-sm text-gray font-serif'>{description}</span>
				)}
			</div>
		</div>
	);
};

export default Profile;
