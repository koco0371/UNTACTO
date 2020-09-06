/adminDeleteCustomer.js*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const cookieParser = require('cookie-parser');
const url = require('url');

router.use(cookieParser());

router.delete('/', function (req, res, next) {

	//connect DB
	var connection = mysql.createConnection({
		host: 'localhost',
		post: 3306,
		user: 'admin',
		password: '####',
		database: '####'
	});
	connection.connect();
	var customerId = res.locals.id;

	//sql query
	var sql_answer = 'delete from answer where customerId = ' + customerId + ';';
	var sql_customer = 'delete from customer where customerId = ' + customerId + ';';
	connection.query(sql_answer, function (err) {
		if (!err) {
			console.log("delete answer success");

			connection.query(sql_customer, function (err) {
				if (!err) {
					console.log("delete customer success");
					res.json({ result: "ok" });
				}
				else {
					console.log("delete customer error");
					res.json({ error: err });
				}
			});
		}
		else {
			console.log("delete answer error");
			res.json({ error: err });
		}
	});
});

module.exports = router;
