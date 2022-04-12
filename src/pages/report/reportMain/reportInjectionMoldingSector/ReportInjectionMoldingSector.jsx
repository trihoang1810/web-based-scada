import React from 'react';
import ReportInjectionChart from '../../../../components/reportInjectionChart/ReportInjectionChart';
import ReportInjectionFilter from '../../../../components/reportInjectionFilter/ReportInjectionFilter';
import { format } from 'date-fns';
import LoadingComponent from '../../../../components/loadingComponent/LoadingComponent';
import useReportQuery from '../../../../hooks/useReportQuery';
function ReportInjectionMoldingSector() {
	const { data, isFetching, isError, error, refetch } = useReportQuery();

	const onSubmit = (value) => {
		refetch();
		console.log(value);
	};

	if (isError) {
		return <div>Something went wrong: {error.message}</div>;
	}
	return (
		<>
			<ReportInjectionFilter onSubmit={onSubmit} />
			{isFetching ? (
				<LoadingComponent />
			) : (
				data?.data.length > 0 &&
				data?.data.map((item, index) => {
					return (
						<React.Fragment key={index}>
							<ReportInjectionChart
								moldId={
									[
										...new Set(
											data?.data.map((item) =>
												item.MachineReport.reduce((acc, cur) => {
													acc.push({
														moldId: cur.MoldID,
														setCycle: cur.SetCycle,
													});
													return acc;
												}, []).filter(
													(value, index, self) =>
														index === self.findIndex((t) => t.moldId === value.moldId && t.setCycle === value.setCycle)
												)
											)
										),
									][index]
								}
								shift={`ca ${index + 1}`}
								categories={item['MachineReport'].map((item) => {
									return format(new Date(item.Timestamp), 'HH:mm:ss');
								})}
								series={[
									{
										name: 'Chu kỳ ép',
										data: item['MachineReport'].map((item) => item.CycleTime),
									},
									{
										name: 'Chu kỳ ép cài đặt',
										data: item['MachineReport'].map((item) => item.SetCycle),
									},
									{
										name: 'Thời gian cửa mở',
										data: item['MachineReport'].map((item) => item.OpenTime),
									},
								]}
							/>
						</React.Fragment>
					);
				})
			)}
		</>
	);
}

export default ReportInjectionMoldingSector;
