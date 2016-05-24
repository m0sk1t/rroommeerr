// ультрамариновый олень носит шапку набекрень
var
	app = require('express')(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	serveStatic = require('serve-static');

app.use(bodyParser.urlencoded({
	limit: '1mb',
	extended: true
}));
app.use(bodyParser.json({
	limit: '1mb'
}));
app.use(serveStatic(__dirname + '/static'));

app.listen('4321', function() {
	require('./router/router.js')(app);
	mongoose.connect('mongodb://localhost:27017/rroommeerr');
});