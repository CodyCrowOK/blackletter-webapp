import { sendLogin } from '../actions';
import { connect } from 'react-redux';
import LoginComponent from '../components/ui/Login';

const mapStateToProps = (state) => {
	return {
		sessionId: state.sessionId
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (email, password) => {
			dispatch(sendLogin(email, password));
		}
	};
};

const Login = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginComponent);

export default Login;
