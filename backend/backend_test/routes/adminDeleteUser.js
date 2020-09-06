/adminDeleteUser.js*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const cookieParser = require('cookie-parser');
const url = require('url');
const fs = require('fs');

router.use(cookieParser());

router.delete('/', function (req, res, next) {
	var id = res.locals.id;

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
	var sql_user = 'delete from user where userId=' + id + ';';
	var sql_survey = 'select * from survey where userId=' + id + ';';
	var sql_delete_survey = 'delete from survey where userId=' + id + ';';
	connection.query(sql_user, function (err) {
		if (!err) {
			console.log("delete user success");
			//delete video
			connection.query(sql_survey, function (err_video, rows) {
				if (!err_video) {
					for (var i = 0; i < rows.length; i++) {
						fs.unlink(rows[i]['videoPath'], function (err_fs) {
							if (err_fs)
								throw err_fs;
							console.log('delete videos');
						});
					}
				}
				else {
					throw err_video;
				}
			});
			//delete survey
			connection.query(sql_delete_survey, function (err2) {
				if (!err2) {
					console.log("delete surveys success");
					res.json({ result: "ok" });
				}
				else {
					console.log("delete surveys error");
					res.json({ error: err2 });
				}
			});
		}
		else {
			console.log("delete delete error");
			res.json({ error: err });
		}
	});
});

module.exports = router;
