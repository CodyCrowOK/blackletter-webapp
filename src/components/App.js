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

const App = (props) => {
	const sessionId = props.sessionId || localStorage.getItem('sessionId');
	const isLogged = !!sessionId;
	const redirect = !isLogged ? <Redirect from="/" to="/login"/> : <Redirect from="/" to="/events"/>;
	const contentContent = isLogged ? (<Route path="/events" component={Events}/>) : <Route path="/login" component={Login}/>;

	return (<div className="container-fluid" id="wrapper">
		<Nav loggedIn={sessionId}/>
		<Content>
			{redirect}
			{contentContent}
		</Content>
	</div>);
};

export default App;
