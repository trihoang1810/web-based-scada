import { format } from 'date-fns';
import React from 'react';
import { packingApi } from '../../../../api/axios/packingReport';
import EmptyPlaceholder from '../../../../components/emptyPlaceholder/EmptyPlaceholder';
import LoadingComponent from '../../../../components/loadingComponent/LoadingComponent';
import MonthlyProgressFilter from '../../../../components/monthlyProgressFilter/MonthlyProgressFilter';

function TrackingMonthlyPacking() {
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [data, setData] = React.useState([]);
	const request = React.useCallback(
		async (startTime) => {
			setLoading(true);
			setError(null);
			try {
				const res = await packingApi.getTemporaryPackingPlanTracking(startTime, format(Date.now(), 'yyyy-MM-dd'));
				setLoading(false);
				setError(null);
				setData(res.data);
			} catch (err) {
				setLoading(false);
				setError(`Có lỗi xảy ra, vui lòng thử lại:\n${err}`);
			}
		},
		[setLoading, setError]
	);
	React.useEffect(() => {
		request(format(Date.now(), 'yyyy-MM').concat('-01'));
	}, [request]);
	const onSubmit = (e) => {
		request(e);
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
			{loading ? (
				<LoadingComponent className="" />
			) : error ? (
				<EmptyPlaceholder isError={true} msg={error} />
			) : data ? (
				<div className="card">
					<div className="card__header">
						<h3>Kết quả tìm kiếm</h3>
					</div>
					<div className="card__body">
						<code>{JSON.stringify(data, null, 2)}</code>
					</div>
				</div>
			) : null}
		</>
	);
}

export default TrackingMonthlyPacking;
