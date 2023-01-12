import { Routes, Route } from 'react-router-dom';
import NoResult from '../../view/NoResult';
import ConfigView from './Configurations';
import EcommerceView from './E-commerce';
import ProductsView from './Products';

const Dashboard = () => {
	const onUpdateFn = () => window.scrollTo(0, 0);
	return (
		<Routes>
			<Route onUpdate={onUpdateFn} path='/' element={<EcommerceView />} />
			<Route
				onUpdate={onUpdateFn}
				path='/products'
				element={<ProductsView />}
			/>
			<Route onUpdate={onUpdateFn} path='/settings' element={<ConfigView />} />
			<Route onUpdate={onUpdateFn} path='*' element={<NoResult />} />
		</Routes>
	);
};

export default Dashboard;
