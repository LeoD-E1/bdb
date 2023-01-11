import Auth from './auth/Auth';
import Home from './Home';
import Landing from './landing/Landing';
import Dashboard from './dashboard/Dashboard';
import NoResult from './NoResult';
import Configurations from './dashboard/Configurations';
import Products from './dashboard/Products';
import Signup from './auth/signup/Signup';

const routes = [
	{ path: '/', component: Home, reqAuth: false },
	{ path: '/landing', component: Landing, reqAuth: false },
	{ path: '/dashboard', component: Dashboard, reqAuth: false },
	{ path: '/dashboard/settings', component: Configurations, reqAuth: false },
	{ path: '/dashboard/products', component: Products, reqAuth: true },
	{ path: '/login', component: Auth, reqAuth: false },
	{ path: '/signup', component: Signup, reqAuth: false },
	{ path: '*', component: NoResult, reqAuth: false },
];

export default routes;
