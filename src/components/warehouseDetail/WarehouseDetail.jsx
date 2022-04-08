import { useParams } from 'react-router-dom';
import Chart from 'react-apexcharts';
import WarehouseTable from '../warehouseTable/WarehouseTable';
import './warehouseDetail.css';

function WarehouseDetail() {
	const { id } = useParams();
	const labels = ['12/02/2022', '13/02/2022', '14/02/2022', '15/02/2022', '16/02/2022', '17/02/2022', '18/02/2022'];

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
							<div className="card__body">
								<WarehouseTable
									headers={[
										{ text: 'Thời gian', key: 'time' },
										{ text: 'Sự kiện', key: 'activity' },
										{ text: 'SL/KL', key: 'quantity' },
										{ text: 'Ghi chú', key: 'note' },
									]}
									body={[
										{
											time: '14/02/2022',
											activity: 'Nhập kho',
											quantity: '300',
											note: 'Không',
										},
										{
											time: '14/02/2022',
											activity: 'xuất kho',
											quantity: '200',
											note: 'Không',
										},
										{
											time: '14/02/2022',
											activity: 'Nhập kho',
											quantity: '500',
											note: 'Không',
										},
									]}
								/>
							</div>
						</div>
					</div>

					<div className="col-4">
						<div className="card">
							<div className="card__body">
								<WarehouseTable
									headers={[
										{ text: 'Vị trí', key: 'location' },
										{ text: 'Số lượng', key: 'quantity' },
									]}
									body={[
										{ location: '2.2.1', quantity: '300' },
										{ location: '2.2.1', quantity: '300' },
										{ location: '2.2.1', quantity: '300' },
										{ location: '2.2.1', quantity: '300' },
										{ location: '2.2.1', quantity: '300' },
										{ location: '2.2.1', quantity: '300' },
										{ location: '2.2.1', quantity: '300' },
									]}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WarehouseDetail;
