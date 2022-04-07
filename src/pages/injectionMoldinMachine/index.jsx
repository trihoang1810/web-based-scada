import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

function InjectionMoldingMainPage() {
	return (
		<>
			<Switch>
				<Redirect exact from="/injection" to="/injection/map" />
			</Switch>
		</>
	);
}

export default InjectionMoldingMainPage;
