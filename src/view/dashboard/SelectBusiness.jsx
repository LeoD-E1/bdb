import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBusinessByUserId } from '../../api/user/businessService';
import Navbar from '../../components/Header/Navbar';
import Spinner from '../../components/Spinner/Spinner';
import { useUserStore } from '../../store/userStore';
import BusinessCard from './BusinessCard';

const SelectBusiness = () => {
	const user = useUserStore(state => state.user);
	const token = useUserStore(state => state.token);
	const navigate = useNavigate();
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchBusiness = async () => {
			setLoading(true);
			try {
				const { data } = await getBusinessByUserId({ id: user.user_id, token });
				setData(data);
			} catch (error) {
				console.log(error);
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchBusiness();
	}, []);

	const handleSelect = businessID => {
		navigate(`/business/${businessID}/branch`);
	};

	if (loading) {
		return (
			<div className='loader-div'>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return (
			<div className='loader-div'>
				<h1 className='text-3xl'> error </h1>
			</div>
		);
	}

	return (
		<>
			<Navbar />
			<main className='sm:layout-container pt-20'>
				<h1 className='text-xl mx-3 font-bold text-black'>
					¿Qué negocio, socio?
				</h1>
				<section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-2 '>
					{data ? (
						data.map(brand => (
							<button
								key={`${brand.business_name} - ${brand.business_id}`}
								onClick={() => handleSelect(brand.business_id)}
							>
								<BusinessCard businessItem={brand} />
							</button>
						))
					) : (
						<div className='loader-div max-h-[100vh]'>
							<button className='mt-5'>
								<a className='relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring'>
									<span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0'></span>

									<span className='relative block px-8 py-3 bg-[#1A2238] border border-current'>
										Crear negocio
									</span>
								</a>
							</button>
						</div>
					)}
				</section>
			</main>
		</>
	);
};

export default SelectBusiness;
