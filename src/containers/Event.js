import React, {Component} from 'react';
import {connect} from 'react-redux';
import EventComponent from '../components/ui/Event';
import {fetchEvent} from '../actions';

class Event extends Component {
	constructor(props) {
		super(props);
		this.state = this.getStateFor(props);
	}

	getStateFor(props) {
		return {
			eventId: props.match.params.id,
			event: props.event || {}
		};
	}

	componentDidMount() {
		const {dispatch} = this.props;
		const {eventId} = this.state;
		const userId = localStorage.getItem('userId');
		dispatch(fetchEvent(userId, eventId));
	}

	render() {
		const {event} = this.props;
		return <EventComponent event={event} />
	}
}

const mapStateToProps = state => ({
	event: state.event.event || {},
	isFetching: true
});

export default connect(mapStateToProps)(Event);
