/* eslint-disable no-fallthrough */
import api from '../api';

const login = (state = {}, action) => {
	switch (action.type) {
	case 'SEND_LOGIN':
		fetch(api.sessions, {
			method: 'POST',
			body: JSON.stringify({
				email: action.email,
				password: action.password
			})
		}).then((res) => {
			return Object.assign({}, state, { loggedIn: true, sessionId: res.json()['session_id'] });
		}).catch((err) => {
			const errorMessage = err.status >= 500 ? 'There was a problem with the server.' : 'Incorrect email or password.';
			return Object.assign({}, state, { loggedIn: false, errorMessage: errorMessage });
		});
	default:
		return state;
	}
};

export default login;
