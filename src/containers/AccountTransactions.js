import React, {Component} from 'react';
import {connect} from 'react-redux';
import TransactionsComponent from '../components/ui/AccountTransactions';
import {fetchAccount} from '../actions';

class AccountTransactions extends Component {
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
		return <TransactionsComponent account={account} />;
	}
}

const mapStateToProps = state => ({
	account: state.account.account || {},
	isFetching: true
});

export default connect(mapStateToProps)(AccountTransactions);
