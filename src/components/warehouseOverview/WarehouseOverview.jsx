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

	const handleDeleteAllRow = () => {
		setRows([1]);
		setFilledRows(['deleted']);
	};

	useEffect(() => {
		if (filledRows.length === row.length && filledRows[0] !== 'deleted') {
			setRows([...row, row[row.length - 1] + 1]);
		}
	}, [filledRows]);

	return (
		<>
			<table className="warehouseOverview">
				<thead>
					<tr className="heading-1">
						<td>Tìm kiếm</td>
						<td></td>
						<td>Kết quả</td>
						<td></td>
						<td></td>
					</tr>
					<tr className="heading-2">
						<td>Loại sản phẩm</td>
						<td>Mã sản phẩm</td>
						<td>Tên sản phẩm</td>
						<td>Số lượng</td>
						<td>
							<button onClick={handleDeleteAllRow} className="btn-deleteAll">
								Xóa tất cả
							</button>
						</td>
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
