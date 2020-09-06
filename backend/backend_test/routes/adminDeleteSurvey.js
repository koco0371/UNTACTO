/adminDeleteSurvey.js*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const cookieParser = require('cookie-parser');
const url = require('url');
const fs = require('fs');

router.use(cookieParser());

router.delete('/', function (req, res, next) {
	var surveyId = res.locals.surveyId;

	//connect DB
	var connection = mysql.createConnection({
		host: 'localhost',
		post: 3306,
		user: 'admin',
		password: '####',
		database: '####'
	});
	connection.connect();

	//sql query
	var sql_survey = 'select * from survey where surveyId = ' + surveyId + ';';
	var sql_delete_survey = 'delete from survey where surveyId = ' + surveyId + ';';

	//delete video
	connection.query(sql_survey, function (err, rows) {
		if (!err) {
			fs.unlink(rows[0]['videoPath'], function (err_fs) {
				if (err_fs)
					throw err_fs;
				console.log('delete video');
			});
		}
		else {
			res.json({ error: err });
		}
	});
	//delete survey
	connection.query(sql_delete_survey, function (err, rows) {
		if (!err) {
			console.log("delete survey success");
			res.json({ result: "ok" });
		}
		else {
			console.log("delete survey error");
			res.json({ error: err });
		}
	});
});

module.exports = router;
