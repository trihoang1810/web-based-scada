import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

function InjectionMoldingMainPage() {
	return (
		<>
			<Switch>
				<Redirect exact from="/injection" to="/injection/pages/1" />
			</Switch>
		</>
	);
}

export default InjectionMoldingMainPage;
