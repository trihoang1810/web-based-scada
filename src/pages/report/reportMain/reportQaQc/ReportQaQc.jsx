import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReportEndurance from './ReportEndurance';
import ReportForcedEndurance from './ReportForcedEndurance';
import ReportDeformation from './ReportDeformation';
import ReportWaterProof from './ReportWaterProof';
import { QA_QC_REPORT_MENU_LIST } from '../../../../utils/utils';
import Navbar from '../../../../components/navBar/NavBar';
import { useRouteMatch } from 'react-router-dom';

function ReportQaQc() {
	const match = useRouteMatch();
	return (
		<>
			<Navbar menuList={QA_QC_REPORT_MENU_LIST} noneBorder={true} />
			<Switch>
				<Route path={`${match.url}/endurance`} component={ReportEndurance} />
				<Route path={`${match.url}/forced-endurance`} component={ReportForcedEndurance} />
				<Route path={`${match.url}/deformation`} component={ReportDeformation} />
				<Route path={`${match.url}/water-proof`} component={ReportWaterProof} />
			</Switch>
		</>
	);
}

export default ReportQaQc;
