import React from 'react';

const Event = props => {
	const {event} = props;

	return (
		<div>
			<h2>{event.name}</h2>
		</div>
	);
};

export default Event;
