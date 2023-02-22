import { Routes, Route } from 'react-router-dom';
import Dashboard from './view/dashboard/Dashboard';
import Home from './view/Home';
import Login from './view/auth/login/Login';
import Signup from './view/auth/signup/Signup';
import NoResult from './view/NoResult';
import VerificationEmail from './view/auth/VerificationEmail';
import { useModalStore } from './store/modalStore';
import Modal from './components/Content/Modal';
import { useEffect } from 'react';

function App() {
	const onUpdateFn = () => window.scrollTo(0, 0);
	const visible = useModalStore(state => state.visible);
	const modalType = useModalStore(state => state.modalType);

	useEffect(() => {
		visible
			? document.body.setAttribute('style', 'overflow: hidden;')
			: document.body.setAttribute('style', 'overflow: scroll;');
	}, [visible]);

	return (
		<div className='App'>
			{visible && <Modal modalType={modalType} />}
			<Routes>
				<Route
					onUpdate={onUpdateFn}
					path='/dashboard/*'
					element={<Dashboard />}
				/>
				<Route onUpdate={onUpdateFn} path='/' element={<Home />} />
				<Route onUpdate={onUpdateFn} path='/login' element={<Login />} />
				<Route onUpdate={onUpdateFn} path='/signup' element={<Signup />} />
				<Route
					onUpdate={onUpdateFn}
					path='/success-sub'
					element={<VerificationEmail />}
				/>
				<Route onUpdate={onUpdateFn} path='*' element={<NoResult />} />
			</Routes>
		</div>
	);
}

export default App;
