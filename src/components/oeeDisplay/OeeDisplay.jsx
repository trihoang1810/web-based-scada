import React from 'react';
import './oeeDisplay.css';

function OeeDisplay({ oeeData }) {
	return (
		<>
			<div className="row full-width">
				<div className="col-3 oee-display__horizontal-divider flex-center">
					<span className="oee-display__header">Mục tiêu</span>
					<span className="oee-display__value">
						50%
						{oeeData.target.trend === 'up' ? (
							<span className="oee-display__trend oee-display__trend--up">
								<span className="oee-display__trend-detail">
									({oeeData.target.discrepancy}
									<i className="bx bxs-up-arrow" />)
								</span>
							</span>
						) : oeeData.target.trend === 'down' ? (
							<span className="oee-display__trend oee-display__trend--down">
								<span className="oee-display__trend-detail">
									({oeeData.target.discrepancy}
									<i className="bx bxs-down-arrow" />)
								</span>
							</span>
						) : null}
					</span>
				</div>
				<div className="col-3 flex-left">
					<span className="oee-display__header oee-display__header--availability">Khả dụng</span>
					<span className="oee-display__value oee-display__value--availability">{oeeData.availability.value}%</span>
				</div>
				<div className="col-3 flex-left">
					<span className="oee-display__header oee-display__header--performance">Hiệu suất</span>
					<span className="oee-display__value oee-display__value--performance">{oeeData.performance.value}%</span>
				</div>
				<div className="col-3 flex-left">
					<span className="oee-display__header oee-display__header--quality">Chất lượng</span>
					<span className="oee-display__value oee-display__value--quality">{oeeData.quality.value}%</span>
				</div>
			</div>
		</>
	);
}

export default OeeDisplay;
