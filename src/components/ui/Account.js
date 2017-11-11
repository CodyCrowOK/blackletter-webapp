import React from 'react';
import {Link} from 'react-router-dom';

import './Account.css';

const Account = ({account}) => {

	// For testing
	account.paymentMethods = account.paymentMethods || [
		{
			type: "card",
			institution: "Visa",
			accountNo: "********6789",
			expiration: "09/19",
			default: true
		}, {
			type: "card",
			institution: "Amex",
			accountNo: "*********1917",
			expiration: "02/21",
			default: false
		}, {
			type: "bank",
			institution: "Commerce Bank",
			accountNo: "*******4232",
			expiration: "",
			default: false
		}
	];

	const makeDefaultButton = item => <a className="btn btn-xs btn-default">Set as default</a>;
	const deleteItemButton = item => <a className="btn btn-xs btn-danger">Delete payment method</a>;

	const paymentMethodItems = account.paymentMethods.map((item, index) =>
		<tr key={index}>
			<td>{item.default ? <small>Default</small> : makeDefaultButton(item)}</td>
			<td>{item.institution}</td>
			<td>{item.accountNo}</td>
			<td>{item.expiration}</td>
			<td>{deleteItemButton(item)}</td>
		</tr>
	);

	return (
		<div>
			<h2>Account</h2>
			<hr />
			<h3>Personal Information</h3>
			<p className="text-warning">Note: Changing this information may affect your payment information.</p>
			<form className="form-horizontal">
				<div className="form-group">
					<label htmlFor="name" className="col-sm-1 control-label">Full Name</label>
					<div className="col-sm-11"><input type="text" className="form-control" id="name" placeholder={account.name} /></div>
				</div>
				<div className="form-group">
					<label htmlFor="email" className="col-sm-1 control-label">Email</label>
					<div className="col-sm-11"><input type="email" className="form-control" id="name" placeholder={account.email} /></div>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-1 col-sm-11">
						<button type="submit" className="btn btn-default">Update Personal Information</button>
					</div>
				</div>
			</form>

			<h3>Change Password</h3>
			<p className="text-info"><a href="https://www.xkcd.com/936/">Choose something long and easy to remember.</a></p>
			<form className="form-horizontal">
				<div className="form-group">
					<label htmlFor="new-password" className="col-sm-1 control-label">New Password</label>
					<div className="col-sm-11"><input type="password" className="form-control" id="new-password" /></div>
				</div>
				<div className="form-group">
					<label htmlFor="confirm-new-password" className="col-sm-1 control-label">Old Password</label>
					<div className="col-sm-11"><input type="password" className="form-control" id="confirm-new-password" /></div>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-1 col-sm-11">
						<button type="submit" className="btn btn-default">Change Password</button>
					</div>
				</div>
			</form>

			<h3>Payment Information</h3>
			<h4>Payment Methods</h4>
			<table className="table">
				<thead>
					<tr>
						<td>{/* default */}</td>
						<td>Institution</td>
						<td>Account #</td>
						<td>Expiration Date</td>
						<td>{/* delete button */}</td>
					</tr>
				</thead>
				<tbody>
					{paymentMethodItems}
				</tbody>
			</table>
			<button className="btn btn-default"><span className="glyphicon glyphicon-plus"></span> Add payment method</button>
			<Link className="btn btn-link" to="/account/transactions">View Transactions</Link>
		</div>
	);
};

export default Account;
