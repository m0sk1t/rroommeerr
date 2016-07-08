module.exports = function(app) {
	var mongoose = require('mongoose'),
		adminhash = require('./pwd.js'),
		Floors = mongoose.model('floor', {
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
		FloorColls = mongoose.model('floorcoll', {
			article: {
				type: String,
				default: ''
			}
		}),
		FloorModels = mongoose.model('floormodel', {
			article: {
				type: String,
				default: ''
			},
			coll: {
				type: String,
				default: ''
			},
			image: {
				type: String,
				default: ''
			}
		}),
		FloorGammas = mongoose.model('floorgamma', {
			article: {
				type: String,
				default: ''
			},
			image: {
				type: String,
				default: ''
			}
		});
	app.route('/floor/:id').get((req, res) => {
		var find = isNaN(req.params.id) ? {
			_id: req.params.id
		} : {};
		Floors.find(find, {
			__v: 0
		}, (err, floors) => {
			res.json(floors);
		});
	}).post((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		Floors.create(req.body, (err, floor) => {
			res.json(floor);
		});
	}).put((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		Floors.findByIdAndUpdate(req.params.id, req.body, (err, floor) => {
			res.json(floor);
		});
	}).delete((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		Floors.findByIdAndRemove(req.params.id, (err, floor) => {
			res.json(floor);
		});
	});

	app.route('/floorcoll/:id').get((req, res) => {
		var find = isNaN(req.params.id) ? {
			_id: req.params.id
		} : {};
		FloorColls.find(find, {
			__v: 0
		}, (err, floors) => {
			res.json(floors);
		});
	}).post((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		FloorColls.create(req.body, (err, floor) => {
			res.json(floor);
		});
	}).put((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		FloorColls.findByIdAndUpdate(req.params.id, req.body, (err, floor) => {
			res.json(floor);
		});
	}).delete((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		FloorColls.findByIdAndRemove(req.params.id, (err, floor) => {
			res.json(floor);
		});
	});

	app.route('/floormodel/:id').get((req, res) => {
		var find = isNaN(req.params.id) ? {
			_id: req.params.id
		} : {};
		FloorModels.find(find, {
			__v: 0
		}, (err, floors) => {
			res.json(floors);
		});
	}).post((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		FloorModels.create(req.body, (err, floor) => {
			res.json(floor);
		});
	}).put((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		FloorModels.findByIdAndUpdate(req.params.id, req.body, (err, floor) => {
			res.json(floor);
		});
	}).delete((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		FloorModels.findByIdAndRemove(req.params.id, (err, floor) => {
			res.json(floor);
		});
	});

	app.route('/floorgamma/:id').get((req, res) => {
		var find = isNaN(req.params.id) ? {
			_id: req.params.id
		} : {};
		FloorGammas.find(find, {
			__v: 0
		}, (err, floors) => {
			res.json(floors);
		});
	}).post((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		FloorGammas.create(req.body, (err, floor) => {
			res.json(floor);
		});
	}).put((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		FloorGammas.findByIdAndUpdate(req.params.id, req.body, (err, floor) => {
			res.json(floor);
		});
	}).delete((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		FloorGammas.findByIdAndRemove(req.params.id, (err, floor) => {
			res.json(floor);
		});
	});
};