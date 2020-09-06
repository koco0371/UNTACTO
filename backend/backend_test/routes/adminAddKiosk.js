/adminListUser.js*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const cookieParser = require('cookie-parser');
const url = require('url');

router.use(cookieParser());

router.post('/', function (req, res, next) {

	//connect DB
	var connection = mysql.createConnection({
		host: 'localhost',
		post: 3306,
		user: 'admin',
		password: '####',
		database: '####'
	});
	connection.connect();
	var location = req.body['location'];

	//sql query
	var sql_kiosk = 'insert into kiosk (kioskId, location) values(';

	//set state in surveys 
	connection.query("select max(kioskId) as max from kiosk", function (err_list, rows_list, fields_list) {
		if (!err_list) {
			console.log("kiosk_max success");
			var kioskId = rows_list[0]['max'] + 1;
			sql_kiosk += "'" + kioskId + "','" + location + "');";
			connection.query(sql_kiosk, function (err) {
				if (!err) {
					console.log("kiosk insert success");
					res.json({
						result: "Ok"
					});
				}
				else {
					console.log("kiosk insert error");
					res.status(403).json(err);
				}
			});
		} else {
			console.log(err_list);
			res.status(403).json(err);
		}
	});
});

module.exports = router;
