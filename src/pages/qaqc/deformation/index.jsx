import React from 'react';

import { ToggleButtonGroup, ToggleButton } from '@mui/material';

import { Switch, Route, useRouteMatch, useHistory, useLocation, Redirect } from 'react-router-dom';

import FirstSystem from './firstsystem/FirstSystem';

import SecondSystem from './secondsystem/SecondSystem';

function Deformation() {
	const history = useHistory();
	const match = useRouteMatch();
	const [alignment, setAlignment] = React.useState('system1');
	const handleAlignment = (event, newAlignment) => {
		if (newAlignment !== null) {
			setAlignment(newAlignment);
			history.push(`${match.url}/${newAlignment}`);
		}
	};
	// function ScrollToBottom() {
	// 	const { pathname } = useLocation();
	// 	React.useEffect(() => {
	// 		window.scrollTo({
	// 			top: 100,
	// 			behavior: 'smooth',
	// 		});
	// 	}, [pathname]);

	// 	return null;
	// }
	return (
		<>
			<h2 className="page-header">Deformation</h2>
			<ToggleButtonGroup
				fullWidth={true}
				value={alignment}
				exclusive
				onChange={handleAlignment}
				aria-label="text alignment"
				sx={{
					'& .MuiButtonBase-root': {
						marginBottom: '10px',
					},
					'& .MuiButtonBase-root.Mui-selected': {
						backgroundColor: 'var(--main-color)',
						color: 'var(--txt-white)',
					},
					'& .MuiButtonBase-root.Mui-selected:hover': {
						backgroundColor: 'var(--second-color-blue)',
						color: 'var(--txt-white)',
					},
				}}
			>
				<ToggleButton value="system1" aria-label="left aligned">
					HỆ KIỂM TRA 1
				</ToggleButton>
				<ToggleButton value="system2" aria-label="right aligned">
					HỆ KIỂM TRA 2
				</ToggleButton>
			</ToggleButtonGroup>
			{/* <ScrollToBottom /> */}
			<Switch>
				<Redirect exact from="/qaqc/m1" to={`${match.url}/system1`} />
				<Route path={`${match.url}/system1`} component={FirstSystem} />
				<Route path={`${match.url}/system2`} component={SecondSystem} />
			</Switch>
		</>
	);
}

export default Deformation;
