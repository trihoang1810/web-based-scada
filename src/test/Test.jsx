import React from 'react';
import { Chart, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement);
const injectionOptions = {
	responsive: true,
	plugins: {
		legend: {
			display: true,
			position: 'top',
		},
	},
};

const injectionData = {
	labels: ['Team A', 'Team B', 'Team C', 'Team D'],
	datasets: [
		{
			label: 'dataset1',
			data: [25, 50, 100, 75],
			backgroundColor: ['red', 'green', 'orange', 'blue'],
		},
	],
};

function Test() {
	return (
		<div>
			<Pie options={injectionOptions} data={injectionData} />
		</div>
	);
}

export default Test;
