import { useModalStore } from '../../store/modalStore';
import { IconMapPin } from '@tabler/icons-react';

const Presentation = (/* { locations } */) => {
	const updateVisibility = useModalStore(state => state.updateVisibility);
	const updateModalType = useModalStore(state => state.updateModalType);
	// const userLocations = JSON.parse(locations);

	const handleClick = () => {
		window.scrollTo(0, 0);
		updateVisibility(true);
		updateModalType({
			newModalType: 'choose-address',
			newJustify: 'center',
			newItems: 'center',
		});
	};

	return (
		<div className='presentation w-full relative h-[50vh] bg-yellow mb-6 overflow-hidden bg'>
			<article className='flex flex-col justify-center items-center h-full w-full gap-5 px-10'>
				<h1 className='text-4xl text-white text-left max-w-lg'>
					Los mejores restaurantes de la Argentina en tu bolsillo
				</h1>
				<div className='relative w-full max-w-md'>
					<input
						type='search'
						className='w-full py-2 pl-11 text-gray-700 rounded-md focus:outline-none focus:bg-white'
						placeholder='¿Cuál es tu dirección?'
						onClick={handleClick}
					/>
					<IconMapPin className='absolute top-0 h-full w-9 p-0.5 bg-darkMarinBlue text-white rounded-l-md focus:outline-none focus:bg-blue-600' />
				</div>
				{/* <section className='bg-purple h-10 w-full'>
					{userLocations?.map(location => (
						<article key={location.id} className='bg-lightGrey p-2 rounded-lg'>
							<h3 className='text-lg text-gray font-semibold'>
								{location.category_name ?? 'Todos los productos'}
							</h3>
						</article>
					))}
				</section> */}
			</article>
		</div>
	);
};

export default Presentation;
