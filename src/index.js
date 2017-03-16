import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from 'react-router-dom';

import reducers from './reducers';
import AppContainer from './containers/App';

const loggerMiddleware = createLogger();
let store = createStore(
	reducers,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

store.subscribe(() =>
  console.log(store.getState())
);


ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={AppContainer} />
		</Router>
	</Provider>,
  document.getElementById('root')
);
