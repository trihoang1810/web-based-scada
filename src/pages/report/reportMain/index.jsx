import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Navbar from '../../../components/navBar/NavBar';
import ReportInjectionMoldingSector from '../../../components/reportInjectionMoldingSector/ReportInjectionMoldingSector';
import ReportPackingSector from '../../../components/reportPackingSector/ReportPackingSector';
import ReportQaQc from './reportQaQc/ReportQaQc';
import { REPORT_MENU_LIST } from '../../../utils/utils';

function ReportMain() {
	const match = useRouteMatch();
	return (
		<>
			<Navbar menuList={REPORT_MENU_LIST}  />
			<Switch>
				<Redirect exact from={match.url} to={`${match.url}/qaqc/endurance`} />
				<Route path={`${match.url}/qaqc`} component={ReportQaQc} />
				<Route path={`${match.url}/packing`} component={ReportPackingSector} />
				<Route path={`${match.url}/injection`} component={ReportInjectionMoldingSector} />
			</Switch>
		</>
	);
}

export default ReportMain;
