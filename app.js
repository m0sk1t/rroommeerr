var
/*gm = require("gm"),
	fs = require("fs"),
	Jimp = require("jimp"),
	*/
	app = require('express')(),
	bodyParser = require('body-parser'),
	serveStatic = require('serve-static');

app.use(bodyParser.urlencoded({
	limit: '1mb',
	extended: true
}));
app.use(bodyParser.json({
	limit: '1mb'
}));
app.use(serveStatic(__dirname + '/static'));

var Floors = require('mongoose').model('Floors', {
	name: String,
	image: String,
	params: Array
})
app.path('/floor/:id').get((req, res) => {
	Floors.find(req.params.id || {}, {
		_id: 0
	}(err, floors) => {
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
})

app.post('/room', function(req, res) {
	/*	var opt = req.body,
		pic = opt.room +
		'_wall_r' + opt.r + '_g' + opt.g + '_b' + opt.b +
		'_doortype' + opt.doortype +
		'_doorcolor' + opt.doorcolor +
		'_interior' + opt.interior +
		'_laminate' + opt.laminate +
		'_plinth' + opt.plinth + '.jpg';
	fs.exists('static/rooms/' + opt.room + '/' + pic, function(exists) {
		if (exists) {
			res.send(pic);
		} else {
			Jimp.read('static/rooms/' + opt.room + '/floor' + opt.laminate + '.png', (err, floor) => {
				if (err) console.error(err);
				Jimp.read('static/rooms/' + opt.room + '/door' + opt.doortype + '.png', (err, door) => {
					if (err) console.error(err);
					Jimp.read('static/rooms/' + opt.room + '/plinth' + opt.plinth + '.png', (err, plinth) => {
						if (err) console.error(err);
						Jimp.read('static/rooms/' + opt.room + '/interior' + opt.interior + '.png', (err, interior) => {
							if (err) console.error(err);
							//gm composite wall.png -compose multiply  wall_composed.png wall_colored.png
							gm('static/rooms/' + opt.room + '/wall.png').colorize((2.55 * (+opt.b)) | 0, (2.55 * (+opt.r)) | 0, (2.55 * (+opt.g)) | 0).write('static/rooms/' + opt.room + '/wall_r' + opt.r + '_g' + opt.g + '_b' + opt.b + '.png', function() {
								Jimp.read('static/rooms/' + opt.room + '/wall_r' + opt.r + '_g' + opt.g + '_b' + opt.b + '.png', function(err, wall) {
									if (err) throw err;
									floor.composite(wall, 0, 0).composite(plinth, 0, 0).composite(door, 0, 0).composite(interior, 0, 0).write('static/rooms/' + opt.room + '/' + pic, function() {
										res.send(pic);
									});
								});
							});
						});
					});
				});
			});
		}
	});
*/
});

app.listen('4321');