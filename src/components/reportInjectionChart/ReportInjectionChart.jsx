import React from 'react';
import Chart from 'react-apexcharts';
import './reportInjectionChart.css';
import mock_injection_report from '../../assets/JsonData/mock_injection_report.json';
import { format } from 'date-fns';
const apexChartConfig = {
	options: {
		chart: {
			id: 'basic-area',
			toolbar: {
				show: true,
			},
		},
		colors: ['#2E93fA', '#66DA26'],
		dataLabels: {
			enabled: true,
			enabledOnSeries: [0],
		},
		stroke: {
			curve: 'smooth',
			width: 2,
		},
		fill: {
			type: 'solid',
			colors: ['#2E93fA', '#66DA26'],
			opacity: [1, 0.7],
		},
		xaxis: {
			categories: mock_injection_report[0]['MachineReport'].map((item) => format(new Date(item.Timestamp), 'HH:mm:ss')),
			formatter: function (value) {
				const averageXaxisLabel = (mock_injection_report[0]['MachineReport'].length / 7).toFixed(0);
				let index = averageXaxisLabel;
				let hoursNumber;
				if ((value = mock_injection_report[0]['MachineReport'][index].Timestamp)) {
					hoursNumber = value;
					index = index + averageXaxisLabel;
				} else {
					hoursNumber = '';
				}
				return hoursNumber;
			},
		},
		yaxis: {
			min: 20,
			max: 50,
		},
		tooltip: {
			enabled: true,
		},
		legend: {
			show: false,
		},
	},
	series: [
		{
			name: 'Chu kỳ ép',
			data: mock_injection_report[0]['MachineReport'].map((item) => item.CycleTime),
		},
		{
			name: 'Chu kỳ ép cài đặt',
			data: mock_injection_report[0]['MachineReport'].map((item) => item.SetCycle),
		},
	],
};
function ReportInjectionChart() {
	return (
		<>
			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card__body">
							<div className="row">
								<div className="col-12">
									<Chart
										type="line"
										options={apexChartConfig.options}
										series={apexChartConfig.series}
										width="100%"
										height="500px"
									/>
								</div>
								<div className="col-12">table</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ReportInjectionChart;
