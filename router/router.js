module.exports = function(app) {
	require('./tools_route.js')(app);
	require('./doors_route.js')(app);
	require('./brands_route.js')(app);
	require('./floors_route.js')(app);
	require('./plinths_route.js')(app);
	require('./interiors_route.js')(app);
};