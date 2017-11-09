import {
	RECEIVE_EVENT,
	REQUEST_EVENT
} from '../actions';

function event(state = {
	event: {},
	isFetching: false
}, action) {
	console.log("ACTION", action);
	switch (action.type) {
		case RECEIVE_EVENT:
			return {
				...state,
				isFetching: false,
				event: action.event
			};
		case REQUEST_EVENT:
			return {
				...state,
				isFetching: true
			};
		default:
			return state;
	}
}

export default event;
