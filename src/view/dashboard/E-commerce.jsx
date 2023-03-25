import CardChart from '../../components/chart/CardChart';
import DoughnutChart from '../../components/chart/DoughnutChart';
import LineChart from '../../components/chart/LineChart';
import ResumeCards from '../../components/Dashboard/e-commerce/ResumeCards';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import { useFetch } from '../../Hook/useFetch';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
const { VITE_APP_BASE_URL } = import.meta.env;

const Ecommerce = () => {
	const { branch_id } = useParams();
	const { data, loading, error } = useFetch(
		`${VITE_APP_BASE_URL}/branch/${branch_id}`
	);

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
		<div className='w-full'>
			<h3 className='text-xl text-gray font-semibold'>E-commerce</h3>
			<ResumeCards />
			<div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 my-3'>
				<div className='lg:col-span-2'>
					<CardChart title={'Traffic source'}>
						<LineChart />
					</CardChart>
				</div>
				<div className='lg:col-span-2'>
					<CardChart title={'Traffic source'}>
						<DoughnutChart />
					</CardChart>
				</div>
			</div>
		</div>
	);
};

const EcommerceView = () => (
	<DashboardLayout>
		<Ecommerce />
	</DashboardLayout>
);

export default EcommerceView;
