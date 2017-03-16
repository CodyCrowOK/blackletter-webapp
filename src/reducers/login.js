const login = (state = {}, action) => {
	switch (action.type) {
		case 'LOG_IN_USER':
			return Object.assign({}, state, { sessionId: action.sessionId });
		case 'BAD_LOGIN':
			return Object.assign({}, state, { errorMessage: action.errorMessage });
		default:
			return state;
	}
};

export default login;
