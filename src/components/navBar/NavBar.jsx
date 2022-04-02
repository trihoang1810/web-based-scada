import React from 'react';
import { NavLink } from 'react-router-dom';
import { MENU_LIST } from '../../utils/utils';
import './navBar.css';

// WARNING: NAVBAR IS UTILIZED FOR THE PURPOSE OF REPORT, IT IS IMPORTANT TO KNOW TOPNAV IS DISPARATE FROM THIS COMPONENT

const Navbar = () => {
	const menuList = MENU_LIST.map(({ url, title }, index) => {
		return (
			<li key={index}>
				<NavLink exact to={url} activeClassName="active">
					{title}
				</NavLink>
			</li>
		);
	});

	return (
		<nav>
			<ul className="menu-list">{menuList}</ul>
		</nav>
	);
};

export default Navbar;
