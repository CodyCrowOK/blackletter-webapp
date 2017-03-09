import React from 'react';
import { connect } from 'react-redux';

const Login = () => (
	<div>
		<h2>Log in</h2>
		<hr />
		<form onSubmit={submit}>
			<div className="form-group">
				<label for="email">Email address:</label>
				<input type="email" className="form-control" id="email" placeholder="alan.turing@example.com" />
			</div>
			<div className="form-group">
				<label for="password">Password:</label>
				<input type="password" className="form-control" id="password" placeholder="" />
			</div>
			<button type="submit" className="btn btn-lg btn-blackletter">Log in</button>
		</form>
	</div>
);

const submit = e => {
	e.preventDefault();

};

export default connect()(Login);
