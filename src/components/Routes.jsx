import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Warehouse from '../pages/Customers';
import Dashboard from '../pages/Dashboard';
import Error from '../pages/Error';
import QualityControlRoutes from '../pages/qaqc';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Dashboard} />
			<Route path="/warehouse" component={Warehouse} />
			<Route path="/qaqc" component={QualityControlRoutes} />
			<Route component={Error} />
		</Switch>
	);
};

export default Routes;
