/surveyDetail.js*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');

router.get('/', function (req, res, next) {
	var companyId = res.locals.userId;
	var surveyId = res.locals.id;
	console.log(surveyId);
	var connection = mysql.createConnection({
		host: 'localhost',
		post: 3306,
		user: 'admin',
		password: '####',
		database: '####'
	});
	connection.connect();
	var sql1 = "select COUNT(*) as cnt from answer where surveyId=" + surveyId + " and userId=" + companyId + ";";
	var sql2 = "select title, kioskId, description_survey, createdAt, beginsAt,expiresAt,videoPath,video from survey where surveyId = " + surveyId + " and userId = " + companyId + ";";
	var sql3 = "select userName from user where userId = " + companyId + ";";
	var sql4 = "select location from kiosk where kioskId = ";
	//answer sql
	var answer;
	connection.query(sql1, function (err, rows, fields) {
		if (!err) {
			console.log("answer select success");
			answer = rows[0]['cnt'];
			send_message = "{answer: " + rows[0]['cnt'] + ",";
		}
		else {
			console.log("answer select error");
			console.log(err);
		}
	});
	//survey sql
	var title;
	var kioskId;
	var description;
	var createdAt;
	var beginsAt;
	var expiresAt;
	var location;
	var video;
	var videoPath;
	connection.query(sql2, function (err, rows, fields) {
		if (!err) {
			console.log("survey select success");
			title = rows[0]['title'];
			kioskId = rows[0]['kioskId'];
			description = rows[0]['description_survey'];
			createdAt = rows[0]['createdAt'];
			beginsAt = rows[0]['beginsAt'];
			expiresAt = rows[0]['expiresAt'];
			video = rows[0]['video'];	//videoName
			videoPath = rows[0]['videoPath'];
			sql4 += kioskId + ";";
			//kiosk sql
			connection.query(sql4, function (err2, rows2, fields2) {
				if (!err2) {
					console.log("kiosk select success");
					location = rows2[0]['location'];
					res.json({
						title: title,
						answer: answer,
						kiosk: {
							kioskId: kioskId,
							location: location
						},
						user: {
							companyName: companyName,
							userId: companyId
						},
						createdAt: createdAt,
						expiresAt: expiresAt,
						description: description,
						beginsAt: beginsAt,
						video: video,
						videoPath: videoPath

					});
				}
				else {
					console.log("kiosk select error");
					console.log(err2);
				}
			});
		}
		else {
			console.log("survey select error");
			console.log(err);
		}
	});
	//user sql
	var companyName
	connection.query(sql3, function (err, rows, fields) {
		connection.end();
		if (!err) {
			companyName = rows[0]['userName'];
		}
		else {
			console.log("user select error");
			console.log(err);
		}
	});
});
module.exports = router;
