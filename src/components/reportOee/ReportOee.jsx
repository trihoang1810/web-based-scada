import React from 'react';
import TimeUpdated from '../lastTimeUpdated/LasTimeUpdated';
import OeeAvailability from '../oeeAvailability/OeeAvailability';
import OeeDowntime from '../oeeDowntime/OeeDowntime';
import './reportOee.css';
function ReportOee() {
	const [downtimeData, setDowntimeData] = React.useState([
		{
			detail: 'Không xác định',
			percent: 80,
			trend: 'up',
		},
		{
			detail: 'Thay khuôn',
			percent: 65,
			trend: 'down',
		},
		{
			detail: 'Thay ca',
			percent: 40,
			trend: 'up',
		},
		{
			detail: 'Mất điện',
			percent: 20,
			trend: 'down',
		},
		{
			detail: 'Vệ sinh máy',
			percent: 10,
			trend: 'up',
		},
	]);
	return (
		<>
			<div className="row">
				<div className="col-4">
					<div className="card">
						<div className="card__header mb-15">
							<h3>Thời gian chết</h3>
							<TimeUpdated time="1" />
						</div>
						<div className="card__body">
							<OeeDowntime downtimeData={downtimeData} />
						</div>
					</div>
				</div>
				<div className="col-4">
					<div className="card full-height">
						<div className="card__header">
							<h3>Tính khả dụng</h3>
							<TimeUpdated time="1" />
						</div>
						<div className="card__body">
							<OeeAvailability />
						</div>
					</div>
				</div>
				<div className="col-4">
					<div className="card">
						<div className="card__header">
							<h3>OEE</h3>
							<TimeUpdated time="1" />
						</div>
						<div className="card__body"></div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<div className="card">
						<div className="card__header">
							<h3>Phế liệu (Scrap)</h3>
							<TimeUpdated time="1" />
						</div>
						<div className="card__body"></div>
					</div>
				</div>
				<div className="col-6">
					<div className="card">
						<div className="card__header">
							<h3>Số lượng</h3>
							<TimeUpdated time="1" />
						</div>
						<div className="card__body"></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ReportOee;
