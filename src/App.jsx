// import routes from './view';
import { Routes, Route } from 'react-router-dom';
import Auth from './view/auth/Auth';
import Home from './view/Home';

function App() {
	return (
		<div className='App'>
			<Routes>
				{/* {routes.map((data, index) => (
					<Route
						onUpdate={() => window.scrollTo(0, 0)}
						exact={true}
						path={data.path}
						element={data.component}
						key={index}
					/>
				))} */}

				<Route
					onUpdate={() => window.scrollTo(0, 0)}
					exact={true}
					path='/'
					element={<Home />}
				/>
				<Route
					onUpdate={() => window.scrollTo(0, 0)}
					exact={true}
					path='/auth'
					element={<Auth />}
				/>
			</Routes>
		</div>
	);
}

export default App;
