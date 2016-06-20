module.exports = function(app) {
	var mongoose = require('mongoose'),
		Floors = mongoose.model('floor', {
			coll: {
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
		FloorColls.create(req.body, (err, floor) => {
			res.json(floor);
		});
	}).put((req, res) => {
		FloorColls.findByIdAndUpdate(req.params.id, req.body, (err, floor) => {
			res.json(floor);
		});
	}).delete((req, res) => {
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
		FloorModels.create(req.body, (err, floor) => {
			res.json(floor);
		});
	}).put((req, res) => {
		FloorModels.findByIdAndUpdate(req.params.id, req.body, (err, floor) => {
			res.json(floor);
		});
	}).delete((req, res) => {
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
		FloorGammas.create(req.body, (err, floor) => {
			res.json(floor);
		});
	}).put((req, res) => {
		FloorGammas.findByIdAndUpdate(req.params.id, req.body, (err, floor) => {
			res.json(floor);
		});
	}).delete((req, res) => {
		FloorGammas.findByIdAndRemove(req.params.id, (err, floor) => {
			res.json(floor);
		});
	});
};