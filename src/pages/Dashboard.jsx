import React from 'react';
// import { Link } from 'react-router-dom';
import Badge from '../components/badge/Badge';
import Table from '../components/table/Table';
import ToggleButtons from '../components/toggleButtons/ToggleButtons';
import { ReactComponent as InjectionMoldingMachine } from '../assets/images/compressor/injectionFullDetail.svg';

//------------------------------------------
// const injectionOptions = {
// 	// responsive: true,
// 	plugins: {
// 		labels: {
// 			render: (args) => {
// 				return args.label;
// 			},
// 		},
// 		datalabels: {
// 			font: {
// 				weight: 'bold',
// 				size: 16,
// 			},
// 		},
// 		legend: {
// 			display: true,
// 			position: 'bottom',
// 		},
// 	},
// };

// const injectionData = {
// 	labels: ['Máy ép nhỏ đang chạy', 'Máy ép nhỏ đang dừng', 'Máy ép lớn đang chạy', 'Máy ép lớn đang dừng'],
// 	datasets: [
// 		{
// 			label: 'dataset1',
// 			data: [25, 50, 100, 75],
// 			backgroundColor: ['red', 'green', 'orange', 'blue'],
// 		},
// 	],
// };
//----------------------------------------------------
const qaqcButtonList = ['Độ bền', 'Độ bền CB', 'Chống thấm', 'Độ biến dạng'];
// const qaqcOptions = {
// 	responsive: true,
// 	maintainAspectRatio: false,
// 	plugins: {
// 		legend: {
// 			display: true,
// 			position: 'top',
// 		},
// 	},
// 	scales: {
// 		x: {
// 			grid: {
// 				display: false,
// 			},
// 		},
// 		y: {
// 			grid: {
// 				display: false,
// 			},
// 		},
// 	},
// };

// const qaqcData = {
// 	labels: ['17:51', '18:00', '18:30', '19:00'],
// 	datasets: [
// 		{
// 			label: 'Độ biến dạng',
// 			data: [10, 25, 50, 100],
// 			// fill: false,
// 			borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
// 			backgroundColor: [
// 				'rgba(255, 99, 132, 0.2)',
// 				'rgba(54, 162, 235, 0.2)',
// 				'rgba(255, 206, 86, 0.2)',
// 				'rgba(75, 192, 192, 0.2)',
// 			],
// 			tension: 0.1,
// 		},
// 		{
// 			label: 'Độ bền',
// 			data: [0, 25, 70, 80],
// 			// fill: false,
// 			borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
// 			backgroundColor: [
// 				'rgba(255, 99, 132, 0.2)',
// 				'rgba(54, 162, 235, 0.2)',
// 				'rgba(255, 206, 86, 0.2)',
// 				'rgba(75, 192, 192, 0.2)',
// 			],
// 			tension: 0.1,
// 		},
// 		{
// 			label: 'Độ bền CB',
// 			data: [50, 100, 120, 140],
// 			// fill: false,
// 			borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
// 			backgroundColor: [
// 				'rgba(255, 99, 132, 0.2)',
// 				'rgba(54, 162, 235, 0.2)',
// 				'rgba(255, 206, 86, 0.2)',
// 				'rgba(75, 192, 192, 0.2)',
// 			],
// 			tension: 0.1,
// 		},
// 		{
// 			label: 'Chống thấm',
// 			data: [5, 7, 8, 9],
// 			// fill: false,
// 			borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
// 			backgroundColor: [
// 				'rgba(255, 99, 132, 0.2)',
// 				'rgba(54, 162, 235, 0.2)',
// 				'rgba(255, 206, 86, 0.2)',
// 				'rgba(75, 192, 192, 0.2)',
// 			],
// 			tension: 0.1,
// 		},
// 	],
// };
//----------------------------------
const packingButtonList = ['Cụm 1', 'Cụm 2', 'Cụm 3', 'Cụm 4', 'Cụm 5', 'Cụm 6'];
// const packingOptions = {
// 	responsive: true,
// 	maintainAspectRatio: false,
// 	plugins: {
// 		legend: {
// 			display: true,
// 			position: 'top',
// 		},
// 	},
// 	scales: {
// 		x: {
// 			grid: {
// 				display: false,
// 			},
// 		},
// 		y: {
// 			grid: {
// 				display: false,
// 			},
// 		},
// 	},
// };

// const packingData = {
// 	labels: ['Cụm máy 1', 'Cụm máy 2', 'Cụm máy 3', 'Cụm máy 4', 'Cụm máy 5', 'Cụm máy 6'],
// 	datasets: [
// 		{
// 			label: 'Sản phẩm thực hiện',
// 			backgroundColor: 'blue',
// 			data: [3, 7, 1, 5, 1, 2],
// 		},
// 		{
// 			label: 'Giờ công',
// 			backgroundColor: 'red',
// 			data: [4, 3, 8, 1, 5, 6],
// 		},
// 	],
// };
// //-------------------------------------
// const warehouseOptions = {
// 	responsive: true,
// 	maintainAspectRatio: false,
// 	plugins: {
// 		legend: {
// 			display: false,
// 		},
// 	},
// 	scales: {
// 		x: {
// 			grid: {
// 				display: false,
// 			},
// 		},
// 		y: {
// 			grid: {
// 				display: false,
// 			},
// 		},
// 	},
// 	indexAxis: 'y',
// };
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
	const [qaqcToggleButtonsIndex, setQaqcToggleButtonsIndex] = React.useState(0);
	const [packingToggleButtonsIndex, setPackingToggleButtonsIndex] = React.useState(0);
	const onQaqcToggleButtonsIndexChange = (index) => {
		setQaqcToggleButtonsIndex(index);
	};
	const onPackingToggleButtonsIndexChange = (index) => {
		setPackingToggleButtonsIndex(index);
	};
	return (
		<div>
			<h2 className="page-header">Dashboard</h2>
			<div className="row">
				<div className="col-6">
					<div className="card full-height">
						<div className="card__header">
							<h3>PHÒNG QA/QC THIẾT BỊ</h3>
						</div>
						<div className="card__body">
							<div className="row">
								<div className="col-12 flex-right">
									<ToggleButtons
										active={qaqcToggleButtonsIndex}
										onClick={onQaqcToggleButtonsIndexChange}
										titles={qaqcButtonList}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="card full-height">
						<div className="card__header">
							<h3>KHU ĐÓNG GÓI</h3>
						</div>
						<div className="card__body">
							<div className="row">
								<div className="col-12 flex-right">
									<ToggleButtons
										active={packingToggleButtonsIndex}
										onClick={onPackingToggleButtonsIndexChange}
										titles={packingButtonList}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-8">
					<div className="card full-height">
						<div className="card__header">
							<h3>KHU MÁY ÉP</h3>
						</div>
						<div className="card__body">
							<div className="row">
								<div className="col-12 flex-center">
									<InjectionMoldingMachine width="100%" height="200px" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-4">
					<div className="card full-height">
						<div className="card__header">
							<h3>CẢNH BÁO</h3>
						</div>
						<div className="card__body">
							<Table headData={latestAlarmData.head} bodyData={latestAlarmData.body} renderBody={renderAlarmBody} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
