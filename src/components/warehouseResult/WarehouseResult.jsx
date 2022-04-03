import { useHistory } from 'react-router-dom';
import './warehouseResult.css';

function WarehouseResult({}) {
	const data = [
		{
			type: 'nắp',
			id: 'm1',
			name: 'nắp 1',
			quantity: '300',
			note: 'không',
		},
		{
			type: 'nắp',
			id: 'm1',
			name: 'nắp 1',
			quantity: '300',
			note: 'không',
		},
		{
			type: 'nắp',
			id: 'm1',
			name: 'nắp 1',
			quantity: '300',
			note: 'không',
		},
	];
	const history = useHistory();

	const showDetail = (id) => {
		history.push('/warehouse/' + id);
	};

	return (
		<div className="card warehouseResult__container">
			<table>
				<thead>
					<tr>
						<td>Loại sản phẩm</td>
						<td>Mã sản phẩm</td>
						<td>Tên sản phẩm</td>
						<td>Số lượng</td>
						<td>Ghi chú</td>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index} onClick={() => showDetail(item.id)}>
							<td>{item.type}</td>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.quantity}</td>
							<td>{item.note}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default WarehouseResult;
