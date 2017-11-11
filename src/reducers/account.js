import {
	RECEIVE_ACCOUNT,
	REQUEST_ACCOUNT
} from '../actions';

function account(state = {
	account: {},
	isFetching: false
}, action) {
	switch (action.type) {
		case RECEIVE_ACCOUNT:
			return {
				...state,
				isFetching: false,
				account: action.account
			};
		case REQUEST_ACCOUNT:
			return {
				...state,
				isFetching: true
			};
		default:
			return state;
	}
}

export default account;
