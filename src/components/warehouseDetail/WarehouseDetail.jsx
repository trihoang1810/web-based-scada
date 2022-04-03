import { useParams } from 'react-router-dom';
// import {
// 	Chart as ChartJS,
// 	CategoryScale,
// 	LinearScale,
// 	PointElement,
// 	LineElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';

import Chart from 'react-apexcharts';
import './warehouseDetail.css';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function WarehouseDetail() {
	const { id } = useParams();

	const options = {
		responnsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
			},
		},
	};

	const labels = ['13/02/2022', '14/02/2022', '15/02/2022', '16/02/2022', '17/02/2022', '18/02/2022', '19/02/2022'];
	const data = {
		labels,
		datasets: [
			{
				data: labels.map(() => Math.floor(Math.random() * 300)),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};

	const apexChartConfig = {
		options: {
			chart: {
				id: 'basic-area',
				toolbar: {
					show: false,
				},
			},
			xaxis: {
				categories: labels,
			},
			tooltip: {
				enabled: false,
			},
			legend: {
				show: false,
			},
		},
		series: [
			{
				name: 'quantity',
				data: labels.map(() => Math.floor(Math.random() * 300)),
			},
		],
	};

	return (
		<>
			<div className="warehouseDetail__container">
				<div className="row">
					<div className="col-12">
						<div className="card warehouseDetail__chart">
							<span>Biểu đồ cập nhật số lượng mã chi tiết {id}</span>
							{/* <div>
								<Line options={options} data={data} />
							</div> */}

							<div>
								<Chart
									type="area"
									options={apexChartConfig.options}
									series={apexChartConfig.series}
									width="100%"
									height="100%"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="row warehouseDetail__values">
					<div className="col-8">
						<div className="card">
							<table>
								<thead>
									<tr>
										<td>Thời gian</td>
										<td>Sự kiện</td>
										<td>SL/KL</td>
										<td>Ghi chú</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>14/02/2022</td>
										<td>Nhập kho</td>
										<td>300</td>
										<td>Không</td>
									</tr>

									<tr>
										<td>14/02/2022</td>
										<td>Nhập kho</td>
										<td>300</td>
										<td>Không</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div className="col-4">
						<div className="card">
							<table>
								<thead>
									<tr>
										<td>Vị trí</td>
										<td>Số lượng</td>
									</tr>
								</thead>

								<tbody>
									<tr>
										<td>2.2.1</td>
										<td>200</td>
									</tr>
									<tr>
										<td>3.2.1</td>
										<td>10</td>
									</tr>
									<tr>
										<td>4.2.1</td>
										<td>400</td>
									</tr>
									<tr>
										<td>2.2.1</td>
										<td>200</td>
									</tr>
									<tr>
										<td>3.2.1</td>
										<td>10</td>
									</tr>
									<tr>
										<td>4.2.1</td>
										<td>400</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WarehouseDetail;
