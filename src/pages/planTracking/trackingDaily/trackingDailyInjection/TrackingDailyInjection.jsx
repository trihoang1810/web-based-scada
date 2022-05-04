import React from 'react';
import DailyPackingProgressTable from '../../../../components/dailyPackingProgressTable/DailyPackingProgressTable';
import LoadingComponent from '../../../../components/loadingComponent/LoadingComponent';
import { injectionApi } from '../../../../api/axios/injectionReport';
import EmptyPlaceholder from '../../../../components/emptyPlaceholder/EmptyPlaceholder';
function TrackingDailyInjection() {
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [data, setData] = React.useState([]);
	React.useEffect(() => {
		setLoading(true);
		injectionApi
			.getTemporaryInjectionPlanTracking()
			.then((res) => {
				setLoading(false);
				setError(null);
				setData(
					res.data.map((item) => {
						return {
							...item,
							priority:
								Math.floor((item.actualQuantity / item.plannedQuantity) * 100) >= 67
									? 'lightgreen'
									: Math.floor((item.actualQuantity / item.plannedQuantity) * 100) < 67 &&
									  Math.floor((item.actualQuantity / item.plannedQuantity) * 100) >= 33
									? 'lightyellow'
									: 'lightred',
						};
					})
				);
			})
			.catch((err) => {
				setLoading(false);
				setError(`Có lỗi xảy ra, vui lòng thử lại.\nLỗi: ${err}`);
			});
	}, []);
	return (
		<>
			{loading ? (
				<LoadingComponent className="mt-20" />
			) : error ? (
				<EmptyPlaceholder isError={true} msg={error} />
			) : data ? (
				<div className="card mt-20">
					<div className="card__header">
						<h3>Kết quả tìm kiếm</h3>
					</div>
					<div className="card__body">
						<DailyPackingProgressTable rawData={data} />
					</div>
				</div>
			) : null}
		</>
	);
}

export default TrackingDailyInjection;
