import React from 'react';
import './qaqcOverviewReportTable.css';
function QaqcOverviewReportTable({ overviewData }) {
	const { purpose, testNote, productId, productName } = overviewData;
	return (
		<>
			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card__body mb-30">
							<table id="qaqcOverviewReportTable">
								<tbody>
									<tr>
										<td>Mã sản phẩm</td>
										<td>{productId ? productId : ''}</td>
									</tr>
									<tr>
										<td>Tên sản phẩm</td>
										<td>{productName ? productName : ''}</td>
									</tr>
									<tr>
										<td>Mục đích kiểm tra</td>
										<td>{purpose ? purpose : ''}</td>
									</tr>
									<tr>
										<td>Ghi chú</td>
										<td>{testNote ? testNote : ''}</td>
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

export default QaqcOverviewReportTable;
