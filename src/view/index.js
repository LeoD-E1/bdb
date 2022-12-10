import Auth from './auth/Auth';
import Home from './Home';

const routes = [
	{ path: '/', component: <Home /> },
	{ path: '/auth', component: <Auth /> },
];

export default routes;
