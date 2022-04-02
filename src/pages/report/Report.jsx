import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import ReportOee from '../../components/reportOee/ReportOee';
import ReportMain from './reportMain';

function Report() {
	const match = useRouteMatch();
	return (
		<>
			<Switch>
				<Redirect exact from={match.url} to={`${match.url}/main`} />
				<Route path={`${match.url}/main`} component={ReportMain} />
				<Route path={`${match.url}/oee`} component={ReportOee} />
			</Switch>
		</>
	);
}

export default Report;
