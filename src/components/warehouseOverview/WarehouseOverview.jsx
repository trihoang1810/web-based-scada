import { useEffect, useState } from 'react';
import WarehouseFilterRow from '../warehouseFilterRow/WarehouseFilterRow';
import './warehouseOverview.css';

function WarehouseOverview() {
	const [row, setRows] = useState([1]);
	const [filledRows, setFilledRows] = useState([]);

	const mapData = {
		discharger: ['D1', 'D2', 'D3', 'D4'],
		lid: ['L1', 'L2', 'L3'],
	};

	useEffect(() => {
		if (filledRows.length === row.length) {
			setRows([...row, row[row.length - 1] + 1]);
		}
	}, [filledRows]);

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
					{row.map((row) => (
						<WarehouseFilterRow
							key={row}
							filterId={row}
							mapData={mapData}
							filledRows={filledRows}
							setFilledRows={setFilledRows}
						/>
					))}
				</tbody>
			</table>
		</>
	);
}

export default WarehouseOverview;
