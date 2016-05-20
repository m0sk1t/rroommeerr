var
	app = require('express')(),
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

var Floors = require('mongoose').model('Floors', {
	name: String,
	image: String,
	params: Array
});
app.route('/floor/:id').get((req, res) => {
	Floors.find(req.params.id || {}, {
		_id: 0
	}, (err, floors) => {
		res.json(floors);
	});
}).post((req, res) => {
	Floors.create(req.body, (err, floor) => {
		res.json(floor);
	});
}).put((req, res) => {
	Floors.findByIdAndUpdate(req.params.id, req.body, (err, floor) => {
		res.json(floor);
	});
}).delete((req, res) => {
	Floors.findByIdAndRemove(req.params.id, (err, floor) => {
		res.json(floor);
	});
});

var Plinths = require('mongoose').model('plinths', {
	name: String,
	image: String,
	params: Array
});
app.route('/plinth/:id').get((req, res) => {
	Plinths.find(req.params.id || {}, {
		_id: 0
	}, (err, plinths) => {
		res.json(plinths);
	});
}).post((req, res) => {
	Plinths.create(req.body, (err, plinth) => {
		res.json(plinth);
	});
}).put((req, res) => {
	Plinths.findByIdAndUpdate(req.params.id, req.body, (err, plinth) => {
		res.json(plinth);
	});
}).delete((req, res) => {
	Plinths.findByIdAndRemove(req.params.id, (err, plinth) => {
		res.json(plinth);
	});
});

var Doors = require('mongoose').model('doors', {
	deco: String,
	coll: String,
	name: String,
	image: String,
	params: Array
});
app.route('/door/:id').get((req, res) => {
	Doors.find(req.params.id || {}, {
		_id: 0
	}, (err, doors) => {
		res.json(doors);
	});
}).post((req, res) => {
	Doors.create(req.body, (err, door) => {
		res.json(door);
	});
}).put((req, res) => {
	Doors.findByIdAndUpdate(req.params.id, req.body, (err, door) => {
		res.json(door);
	});
}).delete((req, res) => {
	Doors.findByIdAndRemove(req.params.id, (err, door) => {
		res.json(door);
	});
});

var Interiors = require('mongoose').model('interiors', {
	name: String,
	image: String,
	params: Array
});
app.route('/interior/:id').get((req, res) => {
	Interiors.find(req.params.id || {}, {
		_id: 0
	}, (err, interiors) => {
		res.json(interiors);
	});
}).post((req, res) => {
	Interiors.create(req.body, (err, interior) => {
		res.json(interior);
	});
}).put((req, res) => {
	Interiors.findByIdAndUpdate(req.params.id, req.body, (err, interior) => {
		res.json(interior);
	});
}).delete((req, res) => {
	Interiors.findByIdAndRemove(req.params.id, (err, interior) => {
		res.json(interior);
	});
});

app.listen('4321');