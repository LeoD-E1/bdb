import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModalStore } from '../../store/modalStore';

const Presentation = () => {
	const updateVisibility = useModalStore(state => state.updateVisibility);
	const updateModalType = useModalStore(state => state.updateModalType);

	const handleClick = () => {
		updateVisibility(true);
		updateModalType({
			newModalType: 'choose-address',
			newJustify: 'center',
			newItems: 'end',
		});
	};

	return (
		<div className='presentation w-full relative h-[50vh] bg-yellow mb-6 overflow-hidden bg'>
			<article className='flex flex-col justify-center items-center h-full w-full gap-5 px-10'>
				<h1 className='text-4xl text-white text-left max-w-lg'>
					Los mejores restaurantes de la Argentina en tu bolsillo
				</h1>
				<div className='relative w-full max-w-md p-2'>
					<input
						type='search'
						className='w-full py-2 pl-16 text-gray-700 rounded-md focus:outline-none focus:bg-white'
						placeholder='¿Cuál es tu dirección?'
						onClick={handleClick}
					/>
					<FontAwesomeIcon
						icon={faLocationPin}
						className='w-5 h-6 absolute left-0 px-3 py-2 bg-darkMarinBlue text-white rounded-md focus:outline-none focus:bg-blue-600'
					/>
				</div>
			</article>
		</div>
	);
};

export default Presentation;
