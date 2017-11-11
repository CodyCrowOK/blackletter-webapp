const domain = 'http://localhost:3000';

const api = {
	sessions: domain + '/api/v1/sessions',
	userOwnedEvents: id => domain + '/api/v1/user_events/' + id,
	eventById: (userId, eventId) => domain + '/api/v1/user_events/' + userId + '/' + eventId,
	userAccount: userId => domain + '/api/v1/account/' + userId
};

export default api;
