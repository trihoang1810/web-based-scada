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
import Alarm from '../pages/Alarm';
import Report from '../pages/report/Report';
import InjectionMap from '../pages/injectionMoldinMachine/injectionMap';
import InjectionMoldingMainPage from '../pages/injectionMoldinMachine/index';
import Login from '../pages/login/Login';
import Test from '../test/Test';
import Settings from '../pages/Settings';
import PlanTracking from '../pages/planTracking/PlanTracking';
import TrackingMonthly from '../pages/planTracking/trackingMonthly/TrackingMonthly';
import TrackingDaily from '../pages/planTracking/trackingDaily/TrackingDaily';
import SignInOidc from '../pages/signInOidc/SignInOidc';
import SignOutOidc from '../pages/signOutOidc/SignOutOidc';
import PrivateRoute from '../utils/protectedRoute';
const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Dashboard} />
			<Route path="/login" exact component={Login} />
			<Route path="/signin-oidc" exact component={SignInOidc} />
			<Route path="/signout-oidc" exact component={SignOutOidc} />
			<Route path="/plan-tracking" exact component={PlanTracking} />
			<Route path="/plan-tracking/monthly" component={TrackingMonthly} />
			<Route path="/plan-tracking/daily" component={TrackingDaily} />
			<Route path="/warehouse/:id" component={WarehouseDetail} />
			<Route path="/warehouse" component={WarehouseOverview} />
			<Route path="/qaqc" component={QualityControlRoutes} />
			<Route path="/packing" exact component={PackingPage} />
			<Route path="/packing/:id" component={PackingDetail} />
			<Route path="/injection" exact component={InjectionMoldingMainPage} />
			<Route exact path="/injection/map" component={InjectionMap} />
			<Route path="/injection/pages/:page" component={InjectionMoldingMachinePage} />
			<Route path="/injection/:id" component={InjectionDetail} />
			<Route path="/warning" component={Alarm} />
			<Route path="/report" component={Report} />
			<Route path="/settings" component={Settings} />
			<Route path="/test" component={Test} />
			<Route component={Error} />
			<PrivateRoute exact path="/" component={Dashboard} />
		</Switch>
	);
};

export default Routes;
