module.exports = function(app) {
	var mongoose = require('mongoose'),
		adminhash = require('./pwd.js'),
		Floors = mongoose.model('floor', {
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
			article: {
				type: String,
				default: ''
			},
			description: {
				type: Array,
				default: []
			},
			images: {
				type: Array,
				default: []
			}
		}),
		FloorColls = mongoose.model('floorcoll', {
			brand: {
				type: String,
				default: ''
			},
			article: {
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

	app.get('/floorcoll_brand/:brandid', (req, res) => {
		FloorColls.find({
			brand: req.params.brandid
		}, {
			__v: 0
		}, (err, floors) => {
			res.json(floors);
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
};
