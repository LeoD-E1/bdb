import { Routes, Route } from 'react-router-dom';
import routes from './view/index';
import Dashboard from './view/dashboard/Dashboard';

function App() {
	return (
		<div className='App'>
			<Routes>
				{routes.map((data, index) => (
					<Route
						onUpdate={() => window.scrollTo(0, 0)}
						exact={true}
						path={data.path}
						element={data.reqAuth ? <Dashboard /> : data.component()}
						key={index}
					/>
				))}
			</Routes>
		</div>
	);
}

export default App;
