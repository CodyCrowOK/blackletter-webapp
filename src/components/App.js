/* eslint-disable no-use-before-define */
import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

import './App.css';

import Content from './ui/Content';
import Events from './ui/Events';
import Login from '../containers/Login';
import Nav from './ui/Nav';

const App = () => (
	<div className="container-fluid" id="wrapper">
		<Nav />
		<Content>
			<Redirect from="/" to="/login"/>
			<Route path="/login" component={Login}/>
			<Route path="/events" component={Events}/>
		</Content>
	</div>
);

export default App;
