import React from 'react';
import {Link} from 'react-router-dom';

import './Events.css';

const Events = props => {
	const {events} = props;

	const noEvents = (
		<div>You have not created any events yet. <a href="#">Create one.</a></div>
	);

	const eventUrl = item => `/events/${item.event}`;

	const eventList = () => {
		const items = events.sort((a, b) => b.event > a.event);
		const listItems = items.map((item, index) =>
			<tr key={index}>
				<td><Link to={eventUrl(item)}><span className="glyphicon glyphicon-edit"></span></Link></td>
				<td><Link to={eventUrl(item)}>{item.name}</Link></td>
				<td>November 7, 1917 (43 days away)</td>
				<td>213</td>
				<td>133 (62%)</td>
				<td>$2015.83</td>
			</tr>
		);
		const listHeader = <thead>
			<tr>
				<td></td>
				<td>Event Name</td>
				<td>Date</td>
				<td># of Guests Invited</td>
				<td># of Guests Verified</td>
				<td>Total Cost</td>
			</tr>
		</thead>;

		return <table className="table table-striped">
			{listHeader}
			<tbody>
				{listItems}
			</tbody>
		</table>;
	};

	return (
		<div>
			<h2>Events</h2>
			<hr />
			{
				Array.isArray(events) && events.length > 0
					? eventList()
					: noEvents
			}
		</div>
	);
};

export default Events;
