import { Formik } from 'formik';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import WarehouseFilterRow from '../warehouseFilterRow/WarehouseFilterRow';
import WarehouseTable from '../warehouseTable/WarehouseTable';
import './warehouseOverview.css';

function WarehouseOverview() {
	const history = useHistory();
	const [rows, setRows] = useState([1, 2, 3]);

	const showDetail = (id) => {
		history.push('/warehouse/' + id);
	};
	const mapData = {
		discharger: ['D1', 'D2', 'D3', 'D4'],
		lid: ['L1', 'L2', 'L3'],
	};

	return (
		<>
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
					{rows.map((row) => (
						<WarehouseFilterRow key={row} filterId={row} mapData={mapData} />
					))}
				</tbody>
			</table>
		</>
	);
}

export default WarehouseOverview;
