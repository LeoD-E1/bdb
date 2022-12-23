import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import routes from './view/index';
Sidebar;

function App() {
	return (
		<div className='App'>
			<Sidebar />
			<Routes>
				{routes.map((data, index) => (
					<Route
						onUpdate={() => window.scrollTo(0, 0)}
						exact={true}
						path={data.path}
						element={data.component()}
						key={index}
					/>
				))}
			</Routes>
		</div>
	);
}

export default App;
