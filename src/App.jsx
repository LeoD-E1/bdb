// import routes from './view';
import { Routes, Route } from 'react-router-dom';
import routes from './view/index';

function App() {
	return (
		<div className='App'>
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
