import './qaqcDashboardTable.css';

const QaQcTable = ({ isDeformation, header, body }) => {
	return (
		<table id="qaqc-dashboard-table" className={isDeformation ? `deformation` : ``}>
			<tbody>
				{!isDeformation
					? header.map((item, index) => {
							return (
								<tr key={index}>
									<th>{item}</th>
									<td>{body[index]}</td>
								</tr>
							);
					  })
					: header.map((item, index) => {
							return (
								<tr key={index}>
									<th>{item}</th>
									<td>{body[0][index]}</td>
									<td>{body[1][index]}</td>
								</tr>
							);
					  })}
			</tbody>
		</table>
	);
};

export default QaQcTable;
