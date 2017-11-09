/* eslint-disable no-use-before-define */
import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

import './App.css';

import Content from './ui/Content';
import Events from '../containers/Events';
import Event from '../containers/Event';
import Login from '../containers/Login';
import Nav from './ui/Nav';

const App = (props) => {
	const sessionId = props.sessionId || localStorage.getItem('sessionId');
	const isLogged = !!sessionId;
	const redirect = !isLogged ? <Redirect from="/" to="/login"/> : <Redirect exact from="/" to="/events"/>;
	const contentContent = isLogged
        ? (<div>
            <Route path="/events/:id" component={Event} />
            <Route exact path="/events" component={Events} />
        </div>)
        : <Route path="/login" component={Login}/>;

	return (<div className="container-fluid" id="wrapper">
		<Nav loggedIn={sessionId}/>
		<Content>
			{contentContent}
            {redirect}
		</Content>
	</div>);
};

export default App;
