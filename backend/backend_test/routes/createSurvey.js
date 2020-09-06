/createSurvey.js*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const moment = require('moment');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'upload/');
	},
	filename: (req, file, cb) => {
		const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
		cb(null, newFilename);
	},
	limits: { fileSize: 1024 * 1024 * 1024 }
});

const upload = multer({ storage });

router.post('/', upload.single('video'), function (req, res, next) {
	if (req.file != undefined) {
		console.log("upload success");
		var title = req.body['title'];
		var explain = req.body['description'];
		var selectedKiosk = req.body['selectedKiosk'];
		var beginsAt = req.body['beginsAt'];
		var duration = req.body['duration'];
		var start = new Date(beginsAt);
		var startYear = start.getFullYear();
		var startMonth = start.getMonth();
		var startDate = start.getDate();
		beginsAt = moment([startYear, startMonth, startDate]).format("YYYY-MM-DD hh:mm:ss");
		var expiresAt = moment([startYear, startMonth, startDate]).add(duration, 'd').format("YYYY-MM-DD hh:mm:ss");
		let file = req.file;
		var userId = res.locals.userId;
		var video = file.originalname;
		var videoPath = path.join(__dirname + '/../' + file.path);
		var connection = mysql.createConnection({
			host: 'localhost',
			post: 3306,
			user: 'admin',
			password: '####',
			database: '####'
		});
		connection.connect();
		var sql = 'select max(surveyId) as num from survey;';
		connection.query(sql, function (err, rows, fields) {
			if (!err) {
				var num = rows[0]['num'] + 1;
				//add video
				sql = 'insert into survey (surveyId,userId,title,kioskId,videoPath,description_survey,beginsAt,expiresAt,video) values(' + num + ',' + userId + ',"' + title + '","' + selectedKiosk + '","' + videoPath + '","' + explain + '","' + beginsAt + '","' + expiresAt + '","' + video + '");';
				connection.query(sql, function (err) {
					connection.end();
					if (!err) {
						console.log("insert success");
						res.json({
							result: "ok"
						});
					}
					else {
						console.log("insert error");
						console.log(err);
						res.status(403).json({
							message: err
						});
					}
				});
			}
			else {
				console.log("survey select error");
				console.log(err);
			}
		});
	}
	else {
		console.log("upload fail");
		console.log(err);
		res.status(403).json({
			message: "error"
		});
	}
});
module.exports = router;
