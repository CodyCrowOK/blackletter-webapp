import { logIn } from '../actions';
import { connect } from 'react-redux';
import LoginComponent from '../components/ui/Login';

const mapStateToProps = (state) => {
	return {
		sessionId: state.login.sessionId
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (email, password, push) => {
			dispatch(logIn(email, password));
			push('/events');
		}
	};
};

const Login = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginComponent);

export default Login;
