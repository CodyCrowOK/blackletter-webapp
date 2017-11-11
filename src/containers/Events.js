import React, {Component} from 'react';
import { connect } from 'react-redux';
import EventsComponent from '../components/ui/Events';
import {fetchEvents} from '../actions';

class AsyncEvents extends Component {
	constructor(props) {
		super(props);
		this.state = this.getStateFor(props);
	}

	getStateFor(props) {
		return {
			events: props.events
		};
	}

	componentDidMount() {
		const {dispatch, userId} = this.props;
		dispatch(fetchEvents(userId));
	}

	render() {
		const {events} = this.props;
		return (
			<EventsComponent events={events} />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userId: localStorage.getItem('userId'),
		events: state.events.events || [],
		isFetching: true
	};
};

// const mapDispatchToProps = (dispatch) => {
//
// };

const Events = connect(
	mapStateToProps
	// ,mapDispatchToProps
)(AsyncEvents);

export default Events;
