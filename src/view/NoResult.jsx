import { useNavigate } from 'react-router-dom';
import CommonBtn from '../components/Content/CommonBtn';

const NoResult = () => {
	const navigate = useNavigate();
	const handleClick = () => navigate('/');
	return (
		<main className='h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]'>
			<h1 className='text-9xl font-extrabold text-white tracking-widest'>
				404
			</h1>
			<div className='bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute'>
				Recurso no encontrado
			</div>
			<CommonBtn title='Ir al inicio' action={handleClick} />
		</main>
	);
};

export default NoResult;
