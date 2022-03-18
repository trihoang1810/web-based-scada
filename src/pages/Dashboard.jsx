import React from 'react';

import { Pie, Line, Bar } from 'react-chartjs-2';

import Badge from '../components/badge/Badge';

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

import ChartDataLabels from 'chartjs-plugin-datalabels';

import { Link } from 'react-router-dom';

import Table from '../components/table/Table';

Chart.defaults.set('plugins.datalabels', {
	color: 'black',
});
Chart.register(
	ArcElement,
	Tooltip,
	Legend,
	ChartDataLabels,
	CategoryScale,
	BarElement,
	LinearScale,
	Title,
	LineElement,
	PointElement
);

//------------------------------------------
const injectionOptions = {
	// responsive: true,
	plugins: {
		labels: {
			render: (args) => {
				return args.label;
			},
		},
		datalabels: {
			font: {
				weight: 'bold',
				size: 16,
			},
		},
		legend: {
			display: true,
			position: 'bottom',
		},
	},
};

const injectionData = {
	labels: ['Máy ép nhỏ đang chạy', 'Máy ép nhỏ đang dừng', 'Máy ép lớn đang chạy', 'Máy ép lớn đang dừng'],
	datasets: [
		{
			label: 'dataset1',
			data: [25, 50, 100, 75],
			backgroundColor: ['red', 'green', 'orange', 'blue'],
		},
	],
};
//----------------------------------------------------
const qaqcOptions = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
			position: 'top',
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
				display: false,
			},
		},
	},
};

const qaqcData = {
	labels: ['17:51', '18:00', '18:30', '19:00'],
	datasets: [
		{
			label: 'Độ biến dạng',
			data: [10, 25, 50, 100],
			// fill: false,
			borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
			],
			tension: 0.1,
		},
		{
			label: 'Độ bền',
			data: [0, 25, 70, 80],
			// fill: false,
			borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
			],
			tension: 0.1,
		},
		{
			label: 'Độ bền CB',
			data: [50, 100, 120, 140],
			// fill: false,
			borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
			],
			tension: 0.1,
		},
		{
			label: 'Chống thấm',
			data: [5, 7, 8, 9],
			// fill: false,
			borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
			],
			tension: 0.1,
		},
	],
};
//----------------------------------
const packingOptions = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
			position: 'top',
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
				display: false,
			},
		},
	},
};

const packingData = {
	labels: ['Cụm máy 1', 'Cụm máy 2', 'Cụm máy 3', 'Cụm máy 4', 'Cụm máy 5', 'Cụm máy 6'],
	datasets: [
		{
			label: 'Sản phẩm thực hiện',
			backgroundColor: 'blue',
			data: [3, 7, 1, 5, 1, 2],
		},
		{
			label: 'Giờ công',
			backgroundColor: 'red',
			data: [4, 3, 8, 1, 5, 6],
		},
	],
};
//-------------------------------------
const warehouseOptions = {
	responsive: true,
	maintainAspectRatio: false,
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
				display: false,
			},
		},
	},
	indexAxis: 'y',
};

const warehouseData = {
	labels: ['Mã máy 1', 'Mã máy 2', 'Mã máy 3', 'Mã máy 4', 'Mã máy 5'],
	datasets: [
		{
			label: 'Tồn kho',
			borderColor: 'blue',
			backgroundColor: 'rgb(123,210,200)',
			data: [300, 700, 100, 50, 550],
		},
	],
};

//-------------------------------------
const latestAlarmData = {
	body: [
		{
			title: 'lorem ipsum',
			priority: 'low',
		},
		{ title: 'lorem ipsum', priority: 'high' },
		{
			title: 'lorem ipsum',
			priority: 'low',
		},
		{ title: 'lorem ipsum', priority: 'middle' },
		{
			title: 'lorem ipsum',
			priority: 'low',
		},
		{ title: 'lorem ipsum', priority: 'high' },
	],
};

const alarmStatus = {
	low: 'success',
	middle: 'warning',
	high: 'danger',
};

const renderAlarmBody = (item, index) => {
	return (
		<tr key={index}>
			<td>{item.title}</td>
			<td>
				<Badge type={alarmStatus[item.priority]} content={item.priority} />
			</td>
		</tr>
	);
};

//-------------------------------------
const Dashboard = () => {
	// const themeReducer = useSelector((state) => state.theme.mode);

	return (
		<div>
			<h2 className="page-header">Dashboard</h2>
			<div className="row">
				<div className="col-3">
					<Link to="/injection/pages/1">
						<div className="card full-height dashboard">
							<div className="card__header">
								<h3>Khu máy ép</h3>
							</div>
							<div className="card__body">
								<Pie options={injectionOptions} plugins={[ChartDataLabels]} data={injectionData} />
							</div>
						</div>
					</Link>
				</div>
				<div className="col-5">
					<Link to="/qaqc">
						<div className="card full-height dashboard">
							<div className="card__header mb-40">
								<h3>Phòng QA/QC thiết bị</h3>
							</div>
							<div className="card__body card__body--center ">
								<Line options={qaqcOptions} data={qaqcData} />
							</div>
						</div>
					</Link>
				</div>
				<div className="col-4">
					<Link to="/packing">
						<div className="card full-height dashboard">
							<div className="card__header mb-40">
								<h3>Khu đóng gói</h3>
							</div>
							<div className="card__body card__body--center">
								<Bar data={packingData} options={packingOptions} />
							</div>
						</div>
					</Link>
				</div>
			</div>
			<div className="row">
				<div className="col-8">
					<Link to="/warehouse">
						<div className="card dashboard">
							<div className="card__header mb-40">
								<h3>Kho vận</h3>
							</div>
							<div className="card__body card__body--center">
								<Bar data={warehouseData} options={warehouseOptions} />
							</div>
						</div>
					</Link>
				</div>
				<div className="col-4">
					<Link to="/alarm">
						<div className="card full-height dashboard">
							<div className="card__header">
								<h3>Cảnh báo</h3>
							</div>
							<div className="card__body">
								<Table headData={latestAlarmData.head} bodyData={latestAlarmData.body} renderBody={renderAlarmBody} />
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
