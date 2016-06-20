module.exports = function(app) {
	app.put('/image/:item', function(req, res) {
		var fs = require('fs'),
			crypto = require('crypto'),
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