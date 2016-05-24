module.exports = function(app) {
	var mongoose = require('mongoose'),
		Doors = mongoose.model('door', {
			assemble: {
				type: String,
				default: ''
			},
			article: {
				type: String,
				default: ''
			},
			decor: {
				type: String,
				default: ''
			},
			image: {
				type: String,
				default: ''
			}
		}),
		DoorCollections = mongoose.model('doorcollection', {
			article: {
				type: String,
				default: ''
			},
			decors: {
				type: Array,
				default: []
			},
			image: {
				type: String,
				default: ''
			}
		}),
		DoorDecors = mongoose.model('doordecor', {
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
		Doors.find(+req.params.id || {}, {
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
		DoorCollections.find(+req.params.id || {}, {
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

	app.route('/doordecor/:id').get((req, res) => {
		DoorDecors.find(+req.params.id || {}, {
			__v: 0
		}, (err, doors) => {
			res.json(doors);
		});
	}).post((req, res) => {
		DoorDecors.create(req.body, (err, door) => {
			res.json(door);
		});
	}).put((req, res) => {
		DoorDecors.findByIdAndUpdate(req.params.id, req.body, (err, door) => {
			res.json(door);
		});
	}).delete((req, res) => {
		DoorDecors.findByIdAndRemove(req.params.id, (err, door) => {
			res.json(door);
		});
	});
};