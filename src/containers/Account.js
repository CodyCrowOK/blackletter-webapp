import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountComponent from '../components/ui/Account';
import {fetchAccount} from '../actions';

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

	render() {
		const {account} = this.props;
		return <AccountComponent account={account} />;
	}
}

const mapStateToProps = state => ({
	account: state.account.account || {},
	isFetching: true
});

export default connect(mapStateToProps)(Account);
