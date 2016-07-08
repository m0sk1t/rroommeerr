module.exports = function(app) {
	var mongoose = require('mongoose'),
		adminhash = require('./pwd.js'),
		Brands = mongoose.model('brands', {
			article: {
				type: String,
				default: ''
			}
		});

	app.route('/brand/:id').get((req, res) => {
		var find = isNaN(req.params.id) ? {
			_id: req.params.id
		} : {};
		Brands.find(find, {
			__v: 0
		}, (err, brands) => {
			res.json(brands);
		});
	}).post((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		Brands.create(req.body, (err, brand) => {
			res.json(brand);
		});
	}).put((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		Brands.findByIdAndUpdate(req.params.id, req.body, (err, brand) => {
			res.json(brand);
		});
	}).delete((req, res) => {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		Brands.findByIdAndRemove(req.params.id, (err, brand) => {
			res.json(brand);
		});
	});
}