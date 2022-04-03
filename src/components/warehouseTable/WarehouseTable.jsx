import './warehouseTable.css';

function WarehouseTable({ headers = [], body = [], onRowClick }) {
	return (
		<table className="warehouseTable">
			<thead>
				<tr>
					{headers.map((header, index) => (
						<th key={index}>{header.text}</th>
					))}
				</tr>
			</thead>

			<tbody>
				{body.map((row, index) => (
					<tr key={index} onClick={() => onRowClick(row.id)}>
						{headers.map((header, index) => (
							<td key={index}>{row[header.key]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default WarehouseTable;
