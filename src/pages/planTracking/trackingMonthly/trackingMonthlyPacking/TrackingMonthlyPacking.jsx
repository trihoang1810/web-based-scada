import React from 'react';
import MonthlyProgressFilter from '../../../../components/monthlyProgressFilter/MonthlyProgressFilter';

function TrackingMonthlyPacking() {
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const onSubmit = (e) => {
		console.log(e);
	};
	return (
		<>
			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card__header">
							<h3>Bộ lọc</h3>
						</div>
						<div className="card__body">
							<MonthlyProgressFilter onSubmit={onSubmit} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default TrackingMonthlyPacking;
