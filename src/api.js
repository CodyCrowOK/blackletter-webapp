const domain = 'http://localhost:3000';

const api = {
	sessions: domain + '/api/v1/sessions',
	userOwnedEvents: id => domain + '/api/v1/user_events/' + id
};

console.log(api);

export default api;
