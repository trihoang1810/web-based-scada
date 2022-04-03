import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Error from '../pages/Error';
import QualityControlRoutes from '../pages/qaqc';
import InjectionMoldingMachinePage from '../pages/injectionMoldinMachine/injectionPage';
import InjectionDetail from '../pages/injectionMoldinMachine/injectionDetail';
import PackingPage from '../pages/packingClassifyingMachine/packingPage';
import PackingDetail from '../pages/packingClassifyingMachine/packingDetail';
import WarehouseOverview from '../pages/warehouse/warehouseOverview';
import WarehouseDetail from '../pages/warehouse/warehouseDetail';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Dashboard} />
			<Route path="/warehouse/:id" component={WarehouseDetail} />
			<Route path="/warehouse" component={WarehouseOverview} />
			<Route path="/qaqc" component={QualityControlRoutes} />
			<Route path="/package" exact component={PackingPage} />
			<Route path="/package/:id" component={PackingDetail} />
			<Route path="/injection/pages/:page" component={InjectionMoldingMachinePage} />
			<Route path="/injection/:id" component={InjectionDetail} />
			<Route component={Error} />
		</Switch>
	);
};

export default Routes;
