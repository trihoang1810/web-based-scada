import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Warehouse from '../pages/Customers';
import Dashboard from '../pages/Dashboard';
import Error from '../pages/Error';
import QualityControlRoutes from '../pages/qaqc';
import InjectionMoldinMachinePage from '../pages/injectionMoldinMachine';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Dashboard} />
			<Route path="/warehouse" component={Warehouse} />
			<Route path="/qaqc" component={QualityControlRoutes} />
			<Route path="/injection/:page" component={InjectionMoldinMachinePage} />
			<Route component={Error} />
		</Switch>
	);
};

export default Routes;
