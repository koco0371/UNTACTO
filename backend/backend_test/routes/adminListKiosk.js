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
	var sql_kiosk = 'select * from kiosk;';

	//set state in surveys 
	connection.query(sql_kiosk, function (err_list, rows_list, fields_list) {
		if (!err_list) {
			console.log("kiosk_list success");
			var kiosk_list = new Array();
			var i = 0;
			while (rows_list[i] != undefined) {
				var kioskId = rows_list[i]['kioskId'];
				var location = rows_list[i]['location'];
				var kiosk = {
					kioskId: kioskId,
					location: location
				};
				kiosk_list.push(kiosk);
				i++;
			}
			console.log(kiosk_list);
			res.json(kiosk_list);
		} else {
			console.log(err_list);
		}
	});
});

module.exports = router;
