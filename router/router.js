module.exports = function(app) {
	require('./doors_route.js')(app);
	require('./floors_route.js')(app);
	require('./plinths_route.js')(app);
	require('./interiors_route.js')(app);
};