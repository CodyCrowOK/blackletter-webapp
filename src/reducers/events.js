import {
	RECEIVE_EVENTS,
	REQUEST_EVENTS
} from '../actions';

function events(state = {
	events: [],
	isFetching: false
}, action) {
	switch (action.type) {
		case RECEIVE_EVENTS:
			return {
				...state,
				isFetching: false,
				events: action.events
			};
		case REQUEST_EVENTS:
			return {
				...state,
				isFetching: true
			};
		default:
			return state;
	}
}

export default events;
