module.exports = function(app) {
	var mongoose = require('mongoose'),
		adminhash = require('./pwd.js'),
		Doors = mongoose.model('door', {
			bg: {
				type: String,
				default: ''
			},
			coll: {
				type: String,
				default: ''
			},
			brand: {
				type: String,
				default: ''
			},
			model: {
				type: String,
				default: ''
			},
			article: {
				type: String,
				default: ''
			},
			image: {
				type: String,
				default: ''
			}
		}),
		DoorColls = mongoose.model('doorcoll', {
			brand: {
				type: String,
				default: ''
			},
			article: {
				type: String,
				default: ''
			}
		}),
		DoorModels = mongoose.model('doormodel', {
			article: {
				type: String,
				default: ''
			},
			image: {
				type: String,
				default: ''
			},
			coll: {
				type: String,
				default: ''
			}
		});

	app.route('/door/:id').get((req, res) => {
		var find = isNaN(req.params.id) ? {
			_id: req.params.id
		} : {};
		Doors.find(find, {
			__v: 0
		}, (err, doors) => {
			res.json(doors);
		});
	}).post((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		Doors.create(req.body, (err, door) => {
			res.json(door);
		});
	}).put((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		Doors.findByIdAndUpdate(req.params.id, req.body, (err, door) => {
			res.json(door);
		});
	}).delete((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		Doors.findByIdAndRemove(req.params.id, (err, door) => {
			res.json(door);
		});
	});

	app.get('/doorcoll_brand/:brandid', (req, res) => {
		DoorColls.find({
			brand: req.params.brandid
		}, {
			__v: 0
		}, (err, doorcolls) => {
			res.json(doorcolls);
		});
	});

	app.route('/doorcoll/:id').get((req, res) => {
		var find = isNaN(req.params.id) ? {
			_id: req.params.id
		} : {};
		DoorColls.find(find, {
			__v: 0
		}, (err, doorcolls) => {
			res.json(doorcolls);
		});
	}).post((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		DoorColls.create(req.body, (err, doorcoll) => {
			res.json(doorcoll);
		});
	}).put((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		DoorColls.findByIdAndUpdate(req.params.id, req.body, (err, doorcoll) => {
			res.json(doorcoll);
		});
	}).delete((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		DoorColls.findByIdAndRemove(req.params.id, (err, doorcoll) => {
			res.json(doorcoll);
		});
	});

	app.route('/doormodel/:id').get((req, res) => {
		var find = isNaN(req.params.id) ? {
			_id: req.params.id
		} : {};
		DoorModels.find(find, {
			__v: 0
		}, (err, doormodels) => {
			res.json(doormodels);
		});
	}).post((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		DoorModels.create(req.body, (err, doormodel) => {
			res.json(doormodel);
		});
	}).put((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		DoorModels.findByIdAndUpdate(req.params.id, req.body, (err, doormodel) => {
			res.json(doormodel);
		});
	}).delete((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		DoorModels.findByIdAndRemove(req.params.id, (err, doormodel) => {
			res.json(doormodel);
		});
	});
};