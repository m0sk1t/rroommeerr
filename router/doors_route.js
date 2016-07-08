module.exports = function(app) {
	var mongoose = require('mongoose'),
		adminhash = require('./pwd.js'),
		Doors = mongoose.model('door', {
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
			gamma: {
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
		}),
		DoorGammas = mongoose.model('doorgamma', {
			article: {
				type: String,
				default: ''
			},
			image: {
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

	app.route('/doorgamma/:id').get((req, res) => {
		var find = isNaN(req.params.id) ? {
			_id: req.params.id
		} : {};
		DoorGammas.find(find, {
			__v: 0
		}, (err, doorgammas) => {
			res.json(doorgammas);
		});
	}).post((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		DoorGammas.create(req.body, (err, doorgamma) => {
			res.json(doorgamma);
		});
	}).put((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		DoorGammas.findByIdAndUpdate(req.params.id, req.body, (err, doorgamma) => {
			res.json(doorgamma);
		});
	}).delete((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		DoorGammas.findByIdAndRemove(req.params.id, (err, doorgamma) => {
			res.json(doorgamma);
		});
	});
};