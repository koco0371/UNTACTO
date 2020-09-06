/downloadFile.js*/
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var mysql = require('mysql');

router.get('/', function (req, res, next) {
	var id = res.locals.id;
	sql = "select videoPath from survey where surveyId = " + id + ";";
	var connection = mysql.createConnection({
		host: 'localhost',
		post: 3306,
		user: 'admin',
		password: '####',
		database: '####'
	});
	connection.connect();
	var file;
	connection.query(sql, function (err, rows, fields) {
		if (!err) {
			console.log("sql success");
			file = rows[0]['videoPath'];
			try {
				if (fs.existsSync(file)) {
					console.log("file exists");
					var filename = path.basename(file);
					var mimetype = mime.getType(file);
					res.setHeader('Content-disposition', 'attachment; filename = ' + filename);
					res.setHeader('Content-type', mimetype);
					var filestream = fs.createReadStream(file);
					filestream.pipe(res);
				}
				else {
					console.log("no file");
					res.send('No files');
					return;
				}

			}
			catch (e) {
				console.log(e);
				res.send('error');
				return;
			}
		}
	});
});

module.exports = router;
