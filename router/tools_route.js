module.exports = function(app) {
	var crypto = require('crypto'),
		adminhash = require('./pwd.js');
	app.get('/check', (req, res) => {
		if (req.cookies.adminhash === adminhash.hash) {
			res.send('OK!');
		} else {
			res.status(403).send('Not authorized');
		}
	});
	app.get('/genid/:string', (req, res) => {
		var id = crypto.createHash('sha256').update(req.params.string + '*C&4GF087g*eGSD8FG802PG213-99AS-F0SAIGDI9h*gf)4{sd:,.VXVP2I023R').digest('hex');
		res.send(id);
	});
	app.get('/setadm/:string', (req, res) => {
		var hash = crypto.createHash('sha256').update(req.params.string + '*C&4GF087g*eGSD8FG802PG213-99AS-F0SAIGDI9h*gf)4{sd:,.VXVP2I023R').digest('hex');
		if (hash === adminhash.hash) {
			res.status(202).cookie("adminhash", hash, {
				expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 77),
				httpOnly: true,
				path: '/'
			}).send('OK!');
		} else {
			res.status(403).send('Not authorized');
		}
	});
	app.post('/image/:item', function(req, res) {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		var fs = require('fs'),
			hash = crypto.createHash('md5'),
			rdd = fs.createReadStream(req.files.file.path);
		console.log('req.files.file.path', req.files.file.path);
		rdd.on('data', function(d) {
			hash.update(d);
		});
		rdd.on('end', function() {
			var fileext = req.files.file.path.split('.').pop(),
				newfilename = '';
			rdd.close();
			newfilename = hash.digest('hex') + '.' + fileext;
			console.log('Uploaded: ', newfilename);
			fs.rename(req.files.file.path, __dirname + '/../static/rooms/' + req.params.item + 's/' + newfilename, function() {
				res.send(newfilename);
			});
		});
	});
	app.delete('/image/:path/:image', function(req, res) {
		if (adminhash.hash !== req.cookies.adminhash) {
			res.status(403).send('Not authorized');
			return;
		}
		var fs = require('fs');
		fs.unlink(__dirname + '/../static/rooms/' + req.params.path + 's/' + image, function(err) {
			if (err) {
				console.error(err);
				res.status(500).json(err);
			} else {
				res.send('OK!');
			}
		})
	});
};
