import api from '../api';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const REQUEST_EVENTS = 'REQUEST_EVENTS';

function requestEvents(userId) {
	return {
		type: REQUEST_EVENTS,
		userId
	};
}

function receiveEvents(userId, json) {
	return {
		type: RECEIVE_EVENTS,
		userId,
		events: json,
		receivedAt: Date.now()
	};
}

export function fetchEvents(userId) {
	return dispatch => {
		dispatch(requestEvents(userId));
		return fetch(api.userOwnedEvents(userId))
			.then(response => response.json())
			.then(json => dispatch(receiveEvents(userId, json)));
	};
}
