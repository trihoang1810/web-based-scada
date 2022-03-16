import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Warehouse from '../pages/Customers';
import Dashboard from '../pages/Dashboard';
import Error from '../pages/Error';
import QualityControlRoutes from '../pages/qaqc';
import InjectionMoldinMachinePage from '../pages/injectionMoldinMachine/injectionPage';
import InjectionDetail from '../pages/injectionMoldinMachine/injectionDetail';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Dashboard} />
			<Route path="/warehouse" component={Warehouse} />
			<Route path="/qaqc" component={QualityControlRoutes} />
			<Route path="/injection/pages/:page" component={InjectionMoldinMachinePage} />
			<Route path="/injection/:id" component={InjectionDetail} />
			<Route component={Error} />
		</Switch>
	);
};

export default Routes;
