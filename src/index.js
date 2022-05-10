import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Provider } from 'react-redux';
import store from './redux/store/store';
import 'react-toastify/dist/ReactToastify.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './assets/css/grid.css';
import './assets/css/index.css';
import './assets/css/theme.css';
// import { AuthProvider } from 'oidc-react';
// import { OidcProvider } from '@axa-fr/react-oidc';
import Layout from './components/layout/Layout';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
	Chart,
	Filler,
	ArcElement,
	Tooltip,
	Legend,
	CategoryScale,
	BarElement,
	LinearScale,
	Title,
	LineElement,
	PointElement,
} from 'chart.js';

Chart.defaults.set('plugins.datalabels', {
	color: 'black',
	labels: {
		title: {
			font: {
				weight: 'bold',
			},
		},
		value: {
			font: {
				weight: 'bold',
			},
		},
	},
});

Chart.register(
	ArcElement,
	Tooltip,
	Filler,
	Legend,
	ChartDataLabels,
	CategoryScale,
	BarElement,
	LinearScale,
	Title,
	LineElement,
	PointElement
);
// localStorage.setItem('isLoggedIn', 'false');
// localStorage.setItem('token', '');
const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		{/* <OidcProvider
			configuration={{
				authority: 'https://authenticationserver20220111094343.azurewebsites.net',
				client_id: 'react-client',
				redirect_uri:
					'https://authenticationserver20220111094343.azurewebsites.net/account/login?returnUrl=http://localhost:3000/authentication/callback',
				silent_redirect_uri:
					'https://authenticationserver20220111094343.azurewebsites.net/account/login?returnUrl=http://localhost:3000/authentication/silent-callback',
				scope: 'openid native-client-scope profile',
				// service_worker_relative_url: '/OidcServiceWorker.js',
				// service_worker_only: false,
			}}
		> */}
		{/* <OidcSecure> */}
		{/* <AuthProvider
			authority="https://authenticationserver20220111094343.azurewebsites.net"
			redirectUri="https://authenticationserver20220111094343.azurewebsites.net/account/login?returnUrl=http://localhost:3000"
			clientId="react-client"
			scope="openid native-client-scope profile"
			onSignIn={async (user) => {
				alert('You just signed in, congratz! Check out the console!');
				console.log(user);
				window.location.hash = '';
			}}
		> */}
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Layout />
			</Provider>
			<ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
		</QueryClientProvider>
		{/* </OidcSecure> */}
		{/* </OidcProvider> */}
		{/* </AuthProvider> */}
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
