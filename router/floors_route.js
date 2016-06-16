module.exports = function(app) {
	var mongoose = require('mongoose'),
		Floors = mongoose.model('floor', {
			collection: {
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
			},
			bg: {
				type: String,
				default: ''
			}
		}),
		FloorCollections = mongoose.model('floorcollection', {
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

	app.route('/floorcollection/:id').get((req, res) => {
		var find = isNaN(req.params.id) ? {
			_id: req.params.id
		} : {};
		FloorCollections.find(find, {
			__v: 0
		}, (err, floors) => {
			res.json(floors);
		});
	}).post((req, res) => {
		FloorCollections.create(req.body, (err, floor) => {
			res.json(floor);
		});
	}).put((req, res) => {
		FloorCollections.findByIdAndUpdate(req.params.id, req.body, (err, floor) => {
			res.json(floor);
		});
	}).delete((req, res) => {
		FloorCollections.findByIdAndRemove(req.params.id, (err, floor) => {
			res.json(floor);
		});
	});
};