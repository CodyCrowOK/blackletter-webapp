// import { } from '../actions';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import EventsComponent from '../components/ui/Events';
import {userOwnedEvents} from '../api';
import {fetchEvents} from '../actions';

class AsyncEvents extends Component {
	constructor(props) {
		super(props);
		this.state = this.getStateFor(props);
	}

	getStateFor = props => {
		this.state = {
			events: props.events
		};
	};

	componentDidMount() {
		const {dispatch, userId} = this.props;
		dispatch(fetchEvents(userId));
	}

	componentDidUpdate(prevProps) {
		if (this.props !== prevProps) {
			const {dispatch, userId} = this.props;
			dispatch(fetchEvents(userId));
		}
	}

	render() {
		const {events} = this.props;
		console.log('state', this.state);
		return (
			<EventsComponent events={events} />
		);
	}
}

const mapStateToProps = (state) => {
	console.log('"state"', state);
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
