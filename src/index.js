import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';

import store from './redux/store/store';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './assets/css/grid.css';
import './assets/css/index.css';
import './assets/css/theme.css';

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

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Layout />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
