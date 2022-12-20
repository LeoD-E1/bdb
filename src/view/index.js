import Auth from './auth/Auth';
import Home from './Home';
import Landing from './landing/Landing';
import Dashboard from './Dashboard';

const routes = [
	{ path: '/', component: Dashboard, reqAuth: false },
	{ path: '/landing', component: Landing, reqAuth: false },
	{ path: '/home', component: Home, reqAuth: false },
	{ path: '/auth', component: Auth, reqAuth: false },
];

export default routes;
