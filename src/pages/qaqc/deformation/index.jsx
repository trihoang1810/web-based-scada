import { Breadcrumbs, Link, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React from 'react';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
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
			<Breadcrumbs
				sx={{
					'& .MuiBreadcrumbs-ol': {
						'& .MuiBreadcrumbs-li': {
							'& .MuiTypography-root': {
								display: 'block',
								fontSize: '1.5em',
								marginBlockStart: '0.83em',
								marginBlockEnd: '0.83em',
								marginInlineStart: '0px',
								marginInlineEnd: '0px',
								fontWeight: 'bold',
							},
							'& .MuiLink-root': {
								marginBottom: '15px',
								textTransform: 'capitalize',
							},
							'& .MuiBreadcrumbs-separator': {
								fontSize: '1.5rem',
							},
						},
					},
				}}
				aria-label="breadcrumb"
			>
				<Link color="inherit" underline="hover" href="/qaqc">
					PHÒNG QA/QC THIẾT BỊ
				</Link>
				<Typography color="text.primary">MÁY KIẾM TRA ĐỘ BIẾN DẠNG</Typography>
			</Breadcrumbs>
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
						backgroundColor: 'var(--main-color)',
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
