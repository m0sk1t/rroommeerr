module.exports = function(app) {
	var mongoose = require('mongoose'),
		Interiors = require('mongoose').model('interior', {
			article: {
				type: String,
				default: ''
			},
			image: {
				type: String,
				default: ''
			}
		}),
		Colors = require('mongoose').model('color', {
			color: {
				type: String,
<<<<<<< HEAD
				default: '#000000'
=======
				default: "#000000"
>>>>>>> e48ec6c184639f252dc6b84a4fb580d268ca4148
			}
		});
	app.route('/interior/:id').get((req, res) => {
		Interiors.find(+req.params.id || {}, {
			__v: 0
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
	app.route('/color/:id').get((req, res) => {
		Colors.find(+req.params.id || {}, {
			__v: 0
		}, (err, colors) => {
			res.json(colors);
		});
	}).post((req, res) => {
		Colors.create(req.body, (err, color) => {
			res.json(color);
		});
	}).put((req, res) => {
		Colors.findByIdAndUpdate(req.params.id, req.body, (err, color) => {
			res.json(color);
		});
	}).delete((req, res) => {
		Colors.findByIdAndRemove(req.params.id, (err, color) => {
			res.json(color);
		});
	});
};