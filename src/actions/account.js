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

function updateUserAction(userId) {
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
		const opts = {
			method: 'PUT',
			body: JSON.stringify(payload)
		};

		console.log(opts)

		dispatch(updateUserAction(userId));
		return fetch(api.userById(userId), opts)
			.then(r => r.json())
			.then(json => dispatch(receiveAccount(userId, json)));
	}
};
