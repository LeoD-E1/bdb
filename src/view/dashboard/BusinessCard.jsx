import noImage from '../../assets/images/no-image.png';

const BusinessCard = ({ businessItem }) => {
	const image = businessItem.image_url ?? noImage;

	return (
		<main className='max-h-96 rounded-xl hover:shadow-xl overflow-hidden relative'>
			<div className='absolute z-5 h-full w-full justify-end flex flex-col'>
				<article className='p-4 rounded-b-xl w-full hover:shadow-xl backdrop-blur-sm bg-gray-700/30 self-end'>
					<h1 className='text-white text-lg font-bold md:text-2xl'>
						{businessItem.business_name ?? businessItem.branch_address}
					</h1>
				</article>
			</div>
			<img className='w-full' src={image} />
		</main>
	);
};

export default BusinessCard;
