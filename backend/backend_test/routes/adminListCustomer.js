/adminListCustomer.js*/
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
	var sql_customer = 'select * from customer;';

	//set state in surveys 
	connection.query(sql_customer, function (err_list, rows_list, fields_list) {
		if (!err_list) {
			console.log("user_list success");
			var customer_list = new Array();
			var i = 0;
			while (rows_list[i] != undefined) {
				var customerId = rows_list[i]['customerId'];
				var point = rows_list[i]['point'];
				var age = rows_list[i]['age'];
				var gender = rows_list[i]['gender'];
				var phoneNum = rows_list[i]['phoneNum'];
				var createdAt = rows_list[i]['createdAt'];
				var customer = {
					customerId: customerId,
					point: point,
					age: age,
					gender: gender,
					phoneNum: phoneNum,
					createdAt: createdAt
				};
				customer_list.push(customer);
				i++;
			}
			console.log(customer_list);
			res.json(customer_list);
		} else {
			console.log(err_list);
		}
	});
});

module.exports = router;
