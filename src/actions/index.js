export const sendLogin = (email, password) => {
	return {
		type: 'SEND_LOGIN',
		email,
		password
	};
};
