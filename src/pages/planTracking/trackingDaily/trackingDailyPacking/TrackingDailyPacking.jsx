import { format } from 'date-fns';
import React from 'react';
import { packingApi } from '../../../../api/axios/packingReport';
import DailyProgressTable from '../../../../components/progressTable/ProgressTable';
import DailyProgressFilter from '../../../../components/dailyProgressFilter/DailyProgressFilter';
import EmptyPlaceholder from '../../../../components/emptyPlaceholder/EmptyPlaceholder';
import LoadingComponent from '../../../../components/loadingComponent/LoadingComponent';
import { useSelector, useDispatch } from 'react-redux';
import { setDailyPackingPlanTrackingData } from '../../../../redux/slice/PlanTrackingSlice';
function TrackingDailyPacking() {
	const dispatch = useDispatch();
	const { dailyPackingPlanTrackingData } = useSelector((state) => state.planTracking);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const requestData = React.useCallback(
		async (startTime, stopTime) => {
			setLoading(true);
			packingApi
				.getTemporaryPackingPlanTracking(startTime, stopTime)
				.then((res) => {
					setLoading(false);
					setError(null);
					res.data.forEach((shift) => {
						const filteredData = [];
						shift.items.forEach((item) => {
							filteredData.push({
								date: shift.date,
								productId: item.item[0].id,
								productName: item.item[0].name,
								plannedQuantity: item.plannedQuantity,
								actualQuantity: item.actualQuantity,
								note: item.note,
								employee: shift.employee[0].firstName + ' ' + shift.employee[0].lastName,
								employeeId: shift.employee[0].id,
								packingUnit: `Cụm máy ${shift.packingUnit[0].id}`,
								priority:
									Math.floor((item.actualQuantity / item.plannedQuantity) * 100) >= 67
										? 'lightgreen'
										: Math.floor((item.actualQuantity / item.plannedQuantity) * 100) < 67 &&
										  Math.floor((item.actualQuantity / item.plannedQuantity) * 100) >= 33
										? 'lightyellow'
										: 'lightred',
							});
						});
						dispatch(setDailyPackingPlanTrackingData(filteredData));
					});
					// setData(
					// 	res.data.map((item) => {
					// 		return {
					// 			...item,
					// 			priority:
					// 				Math.floor((item.actualQuantity / item.plannedQuantity) * 100) >= 67
					// 					? 'lightgreen'
					// 					: Math.floor((item.actualQuantity / item.plannedQuantity) * 100) < 67 &&
					// 					  Math.floor((item.actualQuantity / item.plannedQuantity) * 100) >= 33
					// 					? 'lightyellow'
					// 					: 'lightred',
					// 		};
					// 	})
					// );
				})
				.catch((err) => {
					setLoading(false);
					setError(`Có lỗi xảy ra, vui lòng thử lại.\nLỗi: ${err}`);
				});
		},
		[dispatch]
	);
	const onSubmit = (e) => {
		requestData(e.date, e.date);
	};
	React.useEffect(() => {
		requestData(format(Date.now(), 'yyyy-MM-dd'), format(Date.now(), 'yyyy-MM-dd'));
	}, [requestData]);
	return (
		<>
			<div className="row mt-20">
				<div className="col-12">
					<div className="card">
						<div className="card__header">
							<h3>Bộ lọc</h3>
						</div>
						<div className="card__body">
							<div className="row">
								<div className="col-12">
									<DailyProgressFilter onSubmit={onSubmit} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{loading ? (
				<LoadingComponent className="" />
			) : error ? (
				<EmptyPlaceholder isError={true} msg={error} />
			) : dailyPackingPlanTrackingData ? (
				<div className="card">
					<div className="card__header">
						<h3>Kết quả tìm kiếm</h3>
					</div>
					<div className="card__body">
						<DailyProgressTable isPacking={true} rawData={dailyPackingPlanTrackingData} />
					</div>
				</div>
			) : null}
		</>
	);
}

export default TrackingDailyPacking;
