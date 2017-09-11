import React from 'react';

const Events = props => {
	const {events} = props;
	// const events = [{'event':1,'name':'Big Wedding','owner':1}];

	const noEvents = (
		<div>You have not created any events yet. <a href="#">Create one.</a></div>
	);

	const eventList = () => {
		const items = events.sort((a, b) => b.event > a.event);
		const listItems = items.map((item, index) => <li key={index}>{item.name}</li>);
		return <ul className="event-list">{listItems}</ul>;
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
