import React from 'react';
import ReportInjectionChart from '../../../../components/reportInjectionChart/ReportInjectionChart';
import ReportInjectionFilter from '../../../../components/reportInjectionFilter/ReportInjectionFilter';
import { format } from 'date-fns';
import axios from 'axios';
import { useQuery } from 'react-query';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { css } from '@emotion/react';
import LoadingComponent from '../../../../components/loadingComponent/LoadingComponent';
const fetchInjectionReport = async () => {
	return axios.get('https://my.api.mockaroo.com/injection_molding_machine_report.json?key=4ead7de0');
};
function ReportInjectionMoldingSector() {
	const { data, isLoading, isFetching, isError, error, refetch } = useQuery('injection_report', fetchInjectionReport, {
		refetchOnWindowFocus: false,
		enabled: false,
	});

	const onSubmit = (value) => {
		refetch();
		console.log(value);
	};

	if (isError) {
		return <div>Something went wrong: {error}</div>;
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
