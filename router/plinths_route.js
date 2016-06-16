module.exports = function(app) {
	var mongoose = require('mongoose'),
		Plinths = mongoose.model('plinth', {
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
		});
	app.route('/plinth/:id').get((req, res) => {
		var find = isNaN(req.params.id) ? {
			_id: req.params.id
		} : {};
		Plinths.find(find, {
			__v: 0
		}, (err, plinths) => {
			res.json(plinths);
		});
	}).post((req, res) => {
		Plinths.create(req.body, (err, plinth) => {
			res.json(plinth);
		});
	}).put((req, res) => {
		Plinths.findByIdAndUpdate(req.params.id, req.body, (err, plinth) => {
			res.json(plinth);
		});
	}).delete((req, res) => {
		Plinths.findByIdAndRemove(req.params.id, (err, plinth) => {
			res.json(plinth);
		});
	});
};