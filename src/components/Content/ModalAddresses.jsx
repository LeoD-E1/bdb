import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseModalBtn from './CloseModalBtn';

const ModalAddresses = () => {
	const storedAddress = JSON.parse(localStorage.getItem('addressData'));
	console.log(
		'🚀 ~ file: ModalAddresses.jsx:7 ~ ModalAddresses ~ storedAddress:',
		storedAddress
	);
	const handleClick = () => {
		localStorage.removeItem('addressData');
		window.location.reload();
	};

	return (
		<article className='bg-white shadow-lg rounded-lg p-5 max-w-md w-full h-[500px] relative'>
			<CloseModalBtn />
			<h4 className='text-lg text-dark-gray font-semibold'>Mis direcciones</h4>
			{storedAddress ? (
				<article className='p-3 hover:bg-lightGrey rounded-lg flex justify-between items-center'>
					<div>
						<h5 className='text-lg text-black'>{storedAddress?.label}</h5>
						<p className='text-md'>{storedAddress?.formatted_address}</p>
						<span className='text-sm'>{storedAddress?.desc}</span>
					</div>

					<FontAwesomeIcon
						onClick={handleClick}
						className='text-gray-400 h-5 w-5 p-2 rounded-full hover:text-red'
						icon={faTrash}
					/>
				</article>
			) : (
				<h2>No addresses</h2>
			)}
		</article>
	);
};

export default ModalAddresses;
