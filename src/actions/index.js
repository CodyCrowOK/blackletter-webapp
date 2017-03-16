import api from '../api';

export const logInUser = (sessionId) => {
	return {
		type: 'LOG_IN_USER',
		sessionId
	};
};

export const badLogin = (msg) => {
	return {
		type: 'BAD_LOGIN',
		errorMessage: msg
	};
};

//thunk
export function logIn(email, password) {
	return function(dispatch) {
		return fetch(api.sessions, {
			method: 'POST',
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(json => {
			dispatch(logInUser(json['session_id']));
		})
		.catch(err => dispatch(badLogin(err)));
	};
};
