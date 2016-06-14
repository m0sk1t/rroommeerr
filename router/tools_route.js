module.exports = function(app) {
	app.post('/image', function(req, res) {
		var fs = require('fs'),
			crypto = require('crypto'),
			hash = crypto.createHash('md5'),
			rdd = fs.createReadStream(req.files.file.path);
		console.log('req.files.file.path', req.files.file.path);
		rdd.on('data', function(d) {
			hash.update(d);
		});
		rdd.on('end', function() {
			var newfilename = '';
			rdd.close();
			newfilename = hash.digest('hex') + '.jpg';
			console.log('Uploaded: ', newfilename);
			fs.rename(req.files.file.path, __dirname + '/../static/rooms/' + newfilename, function() {
				res.send(newfilename);
			});
		});
	});
};