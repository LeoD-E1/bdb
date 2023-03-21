const BusinessCard = ({ businessItem }) => {
	const image =
		businessItem.image_url ??
		'https://images.unsplash.com/photo-1489516408517-0c0a15662682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';

	return (
		<main className='max-h-96 rounded-xl hover:shadow-xl overflow-hidden relative'>
			<div className='absolute z-10 h-full w-full justify-end flex flex-col'>
				<article className='p-4 rounded-xl w-full hover:shadow-xl backdrop-blur-sm bg-gray-700/30 self-end'>
					<h1 className='text-white text-lg font-bold md:text-3xl'>
						{businessItem.business_name}
					</h1>
				</article>
			</div>
			<img className='w-full' src={image} />
		</main>
	);
};

export default BusinessCard;
