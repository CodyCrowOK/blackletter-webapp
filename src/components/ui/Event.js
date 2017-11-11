import React from 'react';
import {Link} from 'react-router-dom';

const Event = props => {
	const {event} = props;

	return (
		<div>
			<Link className="btn btn-default" to="/events"><span className="glyphicon glyphicon-arrow-left"></span> Back to Events</Link>
			<h2>{event.name}</h2>
			<hr />
		</div>
	);
};

export default Event;
