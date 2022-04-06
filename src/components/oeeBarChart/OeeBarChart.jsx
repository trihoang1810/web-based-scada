import React from 'react';
import { Bar } from 'react-chartjs-2';

const availabilityOptions = {
	responsive: true,
	maintainAspectRatio: true,
	borderRadius: 5,
	plugins: {
		datalabels: {
			formatter: function (value, context) {
				return value + '%';
			},
		},
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

const options = {
	responsive: true,
	maintainAspectRatio: false,
	borderRadius: 5,
	plugins: {
		legend: {
			display: false,
		},
	},
	scales: {
		x: {
			grid: {
				display: false,
			},
		},
		y: {
			grid: {
				display: true,
			},
		},
	},
	indexAxis: 'x',
};

function OeeBarChart({ type, data }) {
	return (
		<>
			<div className="row">
				<div className="col-12">
					<Bar options={type === 'availability' ? availabilityOptions : options} data={data} />
				</div>
			</div>
		</>
	);
}

export default OeeBarChart;
