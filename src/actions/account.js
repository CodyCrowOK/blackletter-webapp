import api from '../api';

export const RECEIVE_ACCOUNT = 'RECEIVE_ACCOUNT';
export const REQUEST_ACCOUNT = 'REQUEST_ACCOUNT';
export const UPDATE_USER = 'UPDATE_USER';

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

function updateUser(userId) {
	return {
		type: UPDATE_USER,
		userId
	};
}

export function fetchAccount(userId) {
	return dispatch => {
		dispatch(requestAccount(userId));
		return fetch(api.userAccount(userId))
			.then(response => response.json())
			.then(json => dispatch(receiveAccount(userId, json)));
	};
};

export function updateUser(userId, payload) {
	return dispatch => {
		const options = {
			method: 'PUT',
			body: JSON.stringify(payload)
		};

		dispatch(updateUser(userId));
		return fetch(api.userById(userId), options)
			.then(r => r.json())
			.then(json => dispatch(receiveAccount(userId, json)));
	}
};
