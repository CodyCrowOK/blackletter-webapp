import {combineReducers} from 'redux';
import login from './login';
import events from './events';
import event from './event';
import account from './account';

const reducers = combineReducers({
	login,
	events,
	event,
	account
});

export default reducers;
