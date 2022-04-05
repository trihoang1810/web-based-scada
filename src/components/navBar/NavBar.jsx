import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';

// WARNING: NAVBAR IS UTILIZED FOR THE PURPOSE OF REPORT, IT IS IMPORTANT TO KNOW TOPNAV IS DISPARATE FROM THIS COMPONENT

const Navbar = ({ menuList, noneBorder }) => {
	const renderedMenuList = menuList.map(({ url, title }, index) => {
		return (
			<li key={index}>
				<NavLink to={url} activeClassName="active">
					{title}
				</NavLink>
			</li>
		);
	});

	return (
		<nav>
			<ul className={`menu-list ${noneBorder ? `menu-list--none-top-border` : null}`}>{renderedMenuList}</ul>
		</nav>
	);
};

export default Navbar;
