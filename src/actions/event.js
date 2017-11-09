import api from '../api';

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REQUEST_EVENT = 'REQUEST_EVENT';

function requestEvent(eventId) {
	return {
		type: REQUEST_EVENT,
		eventId
	};
}

function receiveEvents(eventId, json) {
	return {
		type: RECEIVE_EVENT,
		eventId,
		event: json,
		receivedAt: Date.now()
	};
}

export function fetchEvent(userId, eventId) {
	return dispatch => {
		dispatch(requestEvent(eventId));
		return fetch(api.eventById(userId, eventId))
			.then(response => response.json())
			.then(json => dispatch(receiveEvents(eventId, json)));
	};
};
