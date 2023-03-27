import { Routes, Route } from 'react-router-dom';
import NoResult from '../../view/NoResult';
import ConfigView from './Configurations';
import EcommerceView from './E-commerce';
import ProductsView from './Products';
import SelectBusiness from './SelectBusiness';

const Dashboard = () => {
	const onUpdateFn = () => window.scrollTo(0, 0);
	return (
		<Routes>
			<Route onUpdate={onUpdateFn} path='/' element={<SelectBusiness />} />
			<Route
				onUpdate={onUpdateFn}
				path='/:business_id/branch/:branch_id/dashboard'
				element={<EcommerceView />}
			/>
			<Route
				onUpdate={onUpdateFn}
				path='/:business_id/branch/:branch_id/products'
				element={<ProductsView />}
			/>
			<Route onUpdate={onUpdateFn} path='/settings' element={<ConfigView />} />
			<Route onUpdate={onUpdateFn} path='*' element={<NoResult />} />
		</Routes>
	);
};

export default Dashboard;
