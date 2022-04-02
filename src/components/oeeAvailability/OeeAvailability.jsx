import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
	Chart,
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

Chart.register(ArcElement, Tooltip, Legend, CategoryScale, BarElement, LinearScale, Title, LineElement, PointElement);

const availabilityOptions = {
	responsive: true,
	maintainAspectRatio: true,
	plugins: {
		legend: {
			display: false,
		},
	},
	scales: {
		x: {
			grid: {
				display: true,
			},
		},
		y: {
			grid: {
				display: true,
			},
			max: 100,
		},
	},
	indexAxis: 'x',
};

const availabilityData = {
	labels: ['27/03', '28/03', '29/03', '30/03', '31/03', '01/04', '02/04'],
	datasets: [
		{
			label: 'Thời gian khả dụng',
			borderColor: 'blue',
			backgroundColor: 'rgb(123,210,200)',
			data: [70, 60, 65, 40, 30, 70, 50],
		},
	],
};

function OeeAvailability() {
	return (
		<>
			<div className="row">
				<div className="col-12">
					<Bar options={availabilityOptions} data={availabilityData} />
				</div>
			</div>
		</>
	);
}

export default OeeAvailability;
