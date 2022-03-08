import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Warehouse from '../pages/Customers';
import Dashboard from '../pages/Dashboard';
import Error from '../pages/Error';
import Test from '../test/Test';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Dashboard} />
			<Route path="/warehouse" component={Test} />
			<Route component={Error} />
		</Switch>
	);
};

export default Routes;
