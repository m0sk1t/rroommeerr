module.exports = function(app) {
	var mongoose = require('mongoose'),
		adminhash = require('./pwd.js'),
		Interiors = require('mongoose').model('interior', {
			bg: {
				type: String,
				default: ''
			},
			image: {
				type: String,
				default: ''
			},
			alias: {
				type: String,
				default: ''
			},
			article: {
				type: String,
				default: ''
			}
		});
	app.route('/interior/:id').get((req, res) => {
		var find = isNaN(req.params.id) ? {
			_id: req.params.id
		} : {};
		Interiors.find(find, {
			__v: 0
		}, (err, interiors) => {
			res.json(interiors);
		});
	}).post((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		Interiors.create(req.body, (err, interior) => {
			res.json(interior);
		});
	}).put((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		Interiors.findByIdAndUpdate(req.params.id, req.body, (err, interior) => {
			res.json(interior);
		});
	}).delete((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		Interiors.findByIdAndRemove(req.params.id, (err, interior) => {
			res.json(interior);
		});
	});
};
