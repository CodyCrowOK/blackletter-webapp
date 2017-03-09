/* eslint-disable no-use-before-define */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

/* Polyfills */
import Promise from 'promise-polyfill';
if (!window.Promise) window.Promise = Promise;
import 'whatwg-fetch';

import Login from './components/ui/Login';

import './App.css';

const App = () => (
	<Router>
		<div className="container-fluid" id="wrapper">
			<Nav />
			<Content>
				<Redirect from="/" to="/login"/>
				<Route path="/login" component={Login}/>
				<Route path="/events" component={Events}/>
			</Content>
		</div>
	</Router>
);

const Nav = (props) => {
	const userLinks = props.isAuthenticated ? (
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
					<li className="sidebar-brand"><h1>Blackletter</h1></li>
					<hr />
					{userLinks}
					<li><Link to="/help">Help</Link></li>
					<li><Link to="/share">Share Blackletter</Link></li>
				</div>
			</div>
		</nav>
	);
};

const Content = (props) => (
	<div id="content" className="container-fluid">{props.children}</div>
);

const Events = () => (
	<div>
		<h2>Events</h2>
		<hr />
	</div>
);

export default App;
