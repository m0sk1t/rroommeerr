var gm = require("gm"),
	Jimp = require("jimp"),
	app = require('express')();

app.get('/room', function(req, res) {
	gm('images/wall.png').colorize(+req.query.r, +req.query.g, +req.query.b).write('images/wall_colorized.png', function() {
		Jimp.read('images/room.png', function(err, room) {
			if (err) throw err;
			Jimp.read("images/wall_colorized.png", function(err, wall) {
				if (err) throw err;
				wall.composite(room, 0, 0).write("images/room_colorized.jpg", function() {
					res.download("images/room_colorized.jpg");
					// res.send('ok');
				});
			});
		});
	});
});

app.listen('4321');