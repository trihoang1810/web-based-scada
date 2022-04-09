import React from 'react';
import ReportInjectionChart from '../../../../components/reportInjectionChart/ReportInjectionChart';
import ReportInjectionFilter from '../../../../components/reportInjectionFilter/ReportInjectionFilter';
import mock_injection_report from '../../../../assets/JsonData/mock_injection_report.json';
import { format } from 'date-fns';

function ReportInjectionMoldingSector() {
	const [moldIdList] = React.useState([
		...new Set(
			mock_injection_report
				.map((item) => {
					return item.MachineReport.reduce((acc, cur) => {
						acc.push({
							moldId: cur.MoldID,
							setCycle: cur.SetCycle,
						});
						return acc;
					}, []);
				})
				.map((item) => {
					return item.filter(
						(value, index, self) =>
							index === self.findIndex((t) => t.moldId === value.moldId && t.setCycle === value.setCycle)
					);
				})
		),
	]);
	const onSubmit = (value) => {
		console.log(value);
	};

	return (
		<>
			<ReportInjectionFilter onSubmit={onSubmit} />
			{mock_injection_report.map((item, index) => {
				return (
					<React.Fragment key={index}>
						<ReportInjectionChart
							moldId={moldIdList[index]}
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
			})}
		</>
	);
}

export default ReportInjectionMoldingSector;
