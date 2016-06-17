module.exports = function(app) {
	var mongoose = require('mongoose'),
		Doors = mongoose.model('door', {
			coll: {
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
		DoorColls = mongoose.model('doorcoll', {
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

	app.route('/doorcoll/:id').get((req, res) => {
		var find = isNaN(req.params.id) ? {
			_id: req.params.id
		} : {};
		DoorColls.find(find, {
			__v: 0
		}, (err, doors) => {
			res.json(doors);
		});
	}).post((req, res) => {
		DoorColls.create(req.body, (err, door) => {
			res.json(door);
		});
	}).put((req, res) => {
		DoorColls.findByIdAndUpdate(req.params.id, req.body, (err, door) => {
			res.json(door);
		});
	}).delete((req, res) => {
		DoorColls.findByIdAndRemove(req.params.id, (err, door) => {
			res.json(door);
		});
	});
};