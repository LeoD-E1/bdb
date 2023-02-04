import { Routes, Route } from 'react-router-dom';
import Dashboard from './view/dashboard/Dashboard';
import Home from './view/Home';
import Login from './view/auth/login/Login';
import Signup from './view/auth/signup/Signup';
import NoResult from './view/NoResult';

function App() {
	const onUpdateFn = () => window.scrollTo(0, 0);
	return (
		<div className='App'>
			<Routes>
				<Route
					onUpdate={onUpdateFn}
					path='/dashboard/*'
					element={<Dashboard />}
				/>
				<Route onUpdate={onUpdateFn} path='/' element={<Home />} />
				<Route onUpdate={onUpdateFn} path='/login' element={<Login />} />
				<Route onUpdate={onUpdateFn} path='/signup' element={<Signup />} />
				<Route onUpdate={onUpdateFn} path='*' element={<NoResult />} />
			</Routes>
		</div>
	);
}

export default App;
