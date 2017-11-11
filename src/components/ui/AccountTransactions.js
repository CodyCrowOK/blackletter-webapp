import React from 'react';
import {Link} from 'react-router-dom';

const AccountTransactions = ({account}) => {
	//For testing
	account.transactions = account.transactions || [
		{
			date: "2017/11/11 01:31:08",
			account: "Visa 2048",
			amount: 86.17,
			description: "Invitations by Blackletter"
		}, {
			date: "2017/11/06 11:23:45",
			account: "Amex 1234",
			amount: 29.23,
			description: "Postage"
		}, {
			date: "2017/10/31 16:55:09",
			account: "Commerce Bank 2341",
			amount: 144.09,
			description: "Invitations by Blackletter"
		}
	]

	const transactionItems = account.transactions.map((item, index) =>
		<tr key={index}>
			<td>{item.date}</td>
			<td>{item.account}</td>
			<td>${item.amount}</td>
			<td>{item.description}</td>
		</tr>
	);

	return (
		<div>
			<Link className="btn btn-default" to="/account"><span className="glyphicon glyphicon-arrow-left"></span> Back to Account</Link>
			<h2>Transactions</h2>
			<hr />
			<table className="table">
				<thead>
					<tr>
						<td>Date</td>
						<td>Account</td>
						<td>$ Amount</td>
						<td>Description</td>
					</tr>
				</thead>
				<tbody>
					{transactionItems}
				</tbody>
			</table>
		</div>
	);
};

export default AccountTransactions;
