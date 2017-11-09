import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
	const userLinks = props.loggedIn ? (
		<div>
			<li className="active"><Link to="/events">Events</Link></li>
			<li><Link to="/contacts">Contacts</Link></li>
			<hr />
			<li><Link to="/account">Account</Link></li>
			<li><Link to="/logout">Log out</Link></li>
			<hr />
		</div>
	) : (
		<div>
			<li className="active"><Link to="/login">Log in</Link></li>
			<hr />
		</div>
	);
	return (
		<nav>
			<div id="sidebar-wrapper">
				<div className="sidebar-nav">
					<li className="sidebar-brand"><h1>blackletter</h1></li>
					<hr />
					{userLinks}
					<li><Link to="/help">Help</Link></li>
					<li><Link to="/share">Share Blackletter</Link></li>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
