import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Test from '../../test/Test';

import QualityControl from './QualityControl';

import Deformation from './deformation';

import Endurance from './endurance';

import ForcedEndurance from './forcedendurance';

import WaterProofing from './waterproofing';

function QualityControlRoutes() {
	const match = useRouteMatch();
	return (
		<>
			<Switch>
				<Route exact path={match.url} component={QualityControl} />
				<Route path={`${match.url}/m1`} component={Deformation} />
				<Route path={`${match.url}/m2`} component={Endurance} />
				<Route path={`${match.url}/m3`} component={ForcedEndurance} />
				<Route path={`${match.url}/m4`} component={WaterProofing} />
			</Switch>
		</>
	);
}

export default QualityControlRoutes;
