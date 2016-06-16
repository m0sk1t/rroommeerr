module.exports = function(app) {
	var mongoose = require('mongoose'),
		Doors = mongoose.model('door', {
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
		DoorCollections = mongoose.model('doorcollection', {
			article: {
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

	app.route('/doorcollection/:id').get((req, res) => {
		var find = isNaN(req.params.id) ? {
			_id: req.params.id
		} : {};
		DoorCollections.find(find, {
			__v: 0
		}, (err, doors) => {
			res.json(doors);
		});
	}).post((req, res) => {
		DoorCollections.create(req.body, (err, door) => {
			res.json(door);
		});
	}).put((req, res) => {
		DoorCollections.findByIdAndUpdate(req.params.id, req.body, (err, door) => {
			res.json(door);
		});
	}).delete((req, res) => {
		DoorCollections.findByIdAndRemove(req.params.id, (err, door) => {
			res.json(door);
		});
	});
};