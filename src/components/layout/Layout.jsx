import React from 'react';

import './layout.css';

import Sidebar from '../sidebar/Sidebar';
import Routes from '../Routes';
import TopNav from '../topnav/TopNav';

import { accessToken } from '../../utils/utils';
import { setLogin } from '../../redux/slice/LoginSlice';

import { BrowserRouter, Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

// import { setMode, setColor } from '../../redux/slice/ThemeSlice';


const Layout = () => {
	const [token, setToken] = React.useState('');
	const themeReducer = useSelector((state) => state.theme);

	const dispatch = useDispatch();
	// const { isLoggedIn } = useSelector((state) => state.login);
	React.useEffect(() => {
		setToken(accessToken);
	}, []);
	React.useEffect(() => {
		token
			? dispatch(
					setLogin({
						user: null,
						isLoggedIn: true,
					})
			  )
			: dispatch(setLogin({ user: null, isLoggedIn: false }));
	}, [token, dispatch]);
	// useEffect(() => {
	// 	window.location = !isLoggedIn
	// 		? 'https://authenticationserver20220111094343.azurewebsites.net/account/login?returnUrl=http://localhost:3000&scope=openid%20native-client-scope%20profile&iss=https%3A%2F%2Fauthenticationserver20220111094343.azurewebsites.net'
	// 		: window.location.origin;
	// }, [isLoggedIn]);
	// useEffect(() => {
	// 	const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');

	// 	const colorClass = localStorage.getItem('colorMode', 'theme-mode-light');

	// 	dispatch(setMode(themeClass));

	// 	dispatch(setColor(colorClass));
	// }, [dispatch]);
	return (
		<BrowserRouter>
			<Route
				render={(props) => (
					<div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
						<Sidebar {...props} />
						{/* <div className={`layout__content ${activeMenu === '' ? '' : 'active'}`}> */}
						<div className={`layout__content`}>
							<TopNav />
							{/* {!isAuthenticated && (
								<button type="button" className="btn btn-primary" onClick={() => login('/profile')}>
									Login
								</button>
							)}
							{isAuthenticated && (
								<button type="button" className="btn btn-primary" onClick={() => logout('/profile')}>
									Logout
								</button>
							)} */}
							<div className="layout__content-main">
								<Routes />
							</div>
						</div>
					</div>
				)}
			/>
		</BrowserRouter>
	);
};
export default Layout;
