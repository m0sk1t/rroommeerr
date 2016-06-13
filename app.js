// ультрамариновый олень носит шапку набекрень
var
	app = require('express')(),
	mongoose = require('mongoose'),
	multipart = require('connect-multiparty'),
	bodyParser = require('body-parser'),
	serveStatic = require('serve-static');

app.use(bodyParser.urlencoded({
	limit: '5mb',
	extended: true
}));

app.use(multipart({
	uploadDir: __dirname + '/tmp'
}));

app.use(bodyParser.json({
	limit: '5mb'
}));

app.use(serveStatic(__dirname + '/static'));

app.listen('4321', function() {
	require('./router/router.js')(app);
	mongoose.connect('mongodb://localhost:27017/rroommeerr');
});