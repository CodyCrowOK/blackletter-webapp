import React, { PropTypes } from 'react';

const Login = (props) => {
	const { onSubmit, sessionId } = props;
	return (<div>
		<h2>Log in</h2>
		<hr />
		<form onSubmit={e => {
			e.preventDefault();

			const email = document.querySelector('#email').value;
			const password = document.querySelector('#password').value;

			return onSubmit(email, password);
		}}>
			<div className="form-group">
				<label htmlFor="email">Email address:</label>
				<input type="email" className="form-control" id="email" placeholder="alan.turing@example.com" />
			</div>
			<div className="form-group">
				<label htmlFor="password">Password:</label>
				<input type="password" className="form-control" id="password" placeholder="" />
			</div>
			<p>Session ID: {sessionId}</p>
			<button type="submit" className="btn btn-lg btn-blackletter">Log in</button>
		</form>
	</div>);
};

Login.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	sessionId: PropTypes.string,
	loggedIn: PropTypes.bool
};

export default Login;
