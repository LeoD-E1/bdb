import Auth from './auth/Auth';
import Home from './Home';
import Landing from './landing/Landing';
import Dashboard from './dashboard/Dashboard';
import NoResult from './NoResult';
import Configurations from './dashboard/Configurations';

const routes = [
	{ path: '/', component: Home, reqAuth: false },
	{ path: '/landing', component: Landing, reqAuth: false },
	{ path: '/dashboard', component: Dashboard, reqAuth: false },
	{ path: '/settings', component: Configurations, reqAuth: false },
	{ path: '/auth', component: Auth, reqAuth: false },
	{ path: '*', component: NoResult, reqAuth: false },
];

export default routes;
