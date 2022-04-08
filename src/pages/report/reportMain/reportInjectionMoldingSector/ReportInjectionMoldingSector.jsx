import React from 'react';
import ReportInjectionChart from '../../../../components/reportInjectionChart/ReportInjectionChart';
import ReportInjectionFilter from '../../../../components/reportInjectionFilter/ReportInjectionFilter';
function ReportInjectionMoldingSector() {
	const onSubmit = (value) => {
		console.log(value);
	};

	return (
		<>
			<ReportInjectionFilter onSubmit={onSubmit} />
			<ReportInjectionChart />
		</>
	);
}

export default ReportInjectionMoldingSector;
