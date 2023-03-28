import { Routes, Route } from 'react-router-dom';
import Dashboard from './view/dashboard/Dashboard';
import Home from './view/Home';
import Login from './view/auth/login/Login';
import Signup from './view/auth/signup/Signup';
import NoResult from './view/NoResult';
import VerificationEmail from './view/auth/confirmation/VerificationEmail';
import { useModalStore } from './store/modalStore';
import Modal from './components/Content/Modal';
import { useEffect } from 'react';
import Landing from './view/Landing';

function App() {
	const onUpdateFn = () => window.scrollTo(0, 0);
	const currentModal = useModalStore(state => state.currentModal);

	useEffect(() => {
		currentModal.visible
			? document.body.setAttribute('style', 'overflow: hidden;')
			: document.body.setAttribute('style', 'overflow-y: auto;');
	}, [currentModal.visible]);

	useEffect(() => {
		window.addEventListener('beforeunload', handleUnload);
		return () => {
			window.removeEventListener('beforeunload', handleUnload);
		};
	}, []);

	const handleUnload = async event => {
		const clients = await navigator.serviceWorker.getRegistrations();
		// Verificar si hay más de una pestaña abierta del mismo dominio
		if (clients.length > 1) {
			return;
		}
		// Verificar si la pestaña que se está cerrando es la última pestaña abierta
		const currentClient = await clients[0].getWindowClient();
		if (currentClient.id !== event.currentTarget.window.id) {
			return;
		}
		localStorage.removeItem('addressData');
	};

	return (
		<div className='App'>
			{currentModal.visible && (
				<Modal
					modalType={currentModal.modalType}
					justify={currentModal.justify}
					items={currentModal.items}
				/>
			)}
			<Routes>
				<Route
					onUpdate={onUpdateFn}
					path='/business/*'
					element={<Dashboard />}
				/>
				<Route onUpdate={onUpdateFn} path='/' element={<Landing />} />
				<Route onUpdate={onUpdateFn} path='/home' element={<Home />} />
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
