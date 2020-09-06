/adminListUser.js*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const cookieParser = require('cookie-parser');
const url = require('url');

router.use(cookieParser());

router.get('/', function (req, res, next) {

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
	var sql_user = 'select * from user order by userId asc;';

	//set state in surveys 
	connection.query(sql_user, function (err_list, rows_list, fields_list) {
		if (!err_list) {
			console.log("user_list success");
			var user_list = new Array();
			var i = 0;
			while (rows_list[i] != undefined) {
				var userId = rows_list[i]['userId'];
				if (userId == 1) {
					i++;
					continue;
				}
				var userName = rows_list[i]['userName'];
				var email = rows_list[i]['email'];
				var createdAt = rows_list[i]['createdAt'];
				var user = {
					userId: userId,
					userName: userName,
					email: email,
					createdAt: createdAt
				};
				user_list.push(user);
				i++;
			}
			res.json(user_list);
		} else {
			console.log(err_list);
		}
	});
});

module.exports = router;
