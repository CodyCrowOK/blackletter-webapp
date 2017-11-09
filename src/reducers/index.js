import {combineReducers} from 'redux';
import login from './login';
import events from './events';
import event from './event';

const reducers = combineReducers({
	login,
	events,
	event
});

export default reducers;
