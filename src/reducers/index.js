import {combineReducers} from 'redux';
import login from './login';
import events from './events';

const reducers = combineReducers({
	login,
	events
});

export default reducers;
