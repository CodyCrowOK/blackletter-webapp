/* eslint-disable no-use-before-define */
import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import './App.css';

import Content from './ui/Content';
import Events from '../containers/Events';
import Event from '../containers/Event';
import Login from '../containers/Login';
import Logout from '../containers/Logout';
import Nav from './ui/Nav';

const App = (props) => {
	const sessionId = props.sessionId || localStorage.getItem('sessionId');
	const isLogged = !!sessionId;
	const redirect = !isLogged ? <Redirect to="/login"/> : <Redirect to="/events"/>;
	const contentContent = isLogged
        ? [
            <Route path="/events/:id" component={Event} />,
            <Route exact path="/events" component={Events} />,
            <Route path="/logout" component={Logout} />
        ]
        : <Route path="/login" component={Login}/>;

	return (<div className="container-fluid" id="wrapper">
		<Nav loggedIn={sessionId}/>
		<Content>
            <Switch>
    			{contentContent}
                {redirect}
            </Switch>
		</Content>
	</div>);
};

export default App;
