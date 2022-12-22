import Auth from './auth/Auth';
import Home from './Home';
import Landing from './landing/Landing';
import Dashboard from './Dashboard';
import NoResult from './NoResult';

const routes = [
	{ path: '/', component: Dashboard, reqAuth: false },
	{ path: '/landing', component: Landing, reqAuth: false },
	{ path: '/home', component: Home, reqAuth: false },
	{ path: '/auth', component: Auth, reqAuth: false },
	{ path: '*', component: NoResult, reqAuth: false },
];

export default routes;
