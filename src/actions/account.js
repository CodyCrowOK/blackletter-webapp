import api from '../api';

export const RECEIVE_ACCOUNT = 'RECEIVE_ACCOUNT';
export const REQUEST_ACCOUNT = 'REQUEST_ACCOUNT';

function requestAccount(userId) {
	return {
		type: REQUEST_ACCOUNT,
		userId
	};
}

function receiveAccount(userId, json) {
	return {
		type: RECEIVE_ACCOUNT,
		userId,
		account: json,
		receivedAt: Date.now()
	};
}

export function fetchAccount(userId) {
	return dispatch => {
		dispatch(requestAccount(userId));
		return fetch(api.userAccount(userId))
			.then(response => response.json())
			.then(json => console.log(json) || dispatch(receiveAccount(userId, json)));
	};
};
