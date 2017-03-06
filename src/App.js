/* eslint-disable no-use-before-define */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {

} from 'react-bootstrap';

import './App.css';

const App = () => (
  <Router>
    <div className="container-fluid" id="wrapper">
		<Nav />
		<Content>
			<Route exact path="/" component={Home}/>
		</Content>
    </div>
  </Router>
)

/*
const Nav = () => (
	<nav className="navbar navbar-default navbar-fixed-top">
		<div className="navbar-header">
			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button>
		<Link className="navbar-brand" to="/">Blackletter</Link>
		</div>
	</nav>
);
*/

const Nav = () => (
	<div id="sidebar-wrapper">
		<div className="sidebar-nav">
			<li className="sidebar-brand"><h1>Blackletter</h1></li>
			<hr />
			<li className="active"><Link to="/">Events</Link></li>
			<li><Link to="/">Contacts</Link></li>
			<hr />
			<li><Link to="/">Account</Link></li>
			<li><Link to="/">Log out</Link></li>
			<hr />
			<li><Link to="/">Help</Link></li>
			<li><Link to="/">Share Blackletter</Link></li>
		</div>
	</div>
);

const Content = (props) => (
	<div>{props.children}</div>
);

const Home = () => (
	<h2></h2>
);

export default App;
