import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountComponent from '../components/ui/Account';
import {fetchAccount, updateUser} from '../actions';

class Account extends Component {
	constructor(props) {
		super(props);
		this.state = this.getStateFor(props);
	}

	getStateFor(props) {
		return {
			userId: props.userId,
			account: props.account || {}
		};
	}

	componentDidMount() {
		const {dispatch} = this.props;
		const userId = localStorage.getItem('userId');
		dispatch(fetchAccount(userId));
	}

	updateUser = payload => {
		const {dispatch} = this.props;
		const userId = localStorage.getItem('userId');
		dispatch(updateUser(userId, payload));
	};

	render() {
		const {account} = this.props;
		return <AccountComponent account={account} updateUser={this.updateUser} />;
	}
}

const mapStateToProps = state => ({
	account: state.account.account || {},
	isFetching: false
});

export default connect(mapStateToProps)(Account);
