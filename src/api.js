const domain = 'http://localhost:3000';

const api = {
	sessions: domain + '/api/v1/sessions',
	userOwnedEvents: id => domain + '/api/v1/user_events/' + id,
	eventById: (userId, eventId) => domain + '/api/v1/user_events/' + userId + '/' + eventId
};

console.log(api);

export default api;
