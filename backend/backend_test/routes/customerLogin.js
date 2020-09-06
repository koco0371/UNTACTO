/customerLogin.js*/
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mysql = require('mysql');

const secret = "ThISisSecRETKeY";

router.post('/', function (req, res, next) {
	var phoneNumber = req.body['phoneNumber'];
	var gender = req.body['gender'];
	var age = req.body['age'];
	var connection = mysql.createConnection({
		host: 'localhost',
		post: 3306,
		user: 'admin',
		password: '####',
		database: '####'
	});
	connection.connect();

	var sql = 'select * from customer where phoneNum = "' + phoneNumber + '" and gender = "' + gender + '";';
	connection.query(sql, function (err, rows, fields) {
		//err check
		if (!err && rows[0] != undefined) {
			console.log("customer login");
			const token = jwt.sign({
				id: rows[0]['customerId'],
				exp: Math.floor(Date.now() / 1000) + (60 * 60)
			},
				secret);
			var customer = {
				phoneNumber: rows[0]['phoneNum'],
				point: rows[0]['point'] + 100,
				customerId: rows[0]['customerId'],
				age: rows[0]['age']
			};
			res.cookie('customer', customer);
			res.cookie('tok', token);
			res.cookie('customerId', rows[0]['customerId']);
			res.cookie('age', rows[0]['age']);
			var point = rows[0]['point'] + 100;
			var sql2 = 'update answer set customerId = ' + rows[0]['customerId'] + ' where customerId = -1;';
			connection.query(sql2, function (err2) {
				if (!err2) {
					console.log("update success");
				}
				else {
					console.log("update err");
					console.log(err);
				}
			});
			sql2 = 'update customer set point = ' + point + ' where customerId = ' + rows[0]['customerId'] + ';';
			connection.query(sql2, function (err2) {
				if (!err2) {
					console.log('update success');
					res.json({
						result: 'ok',
						token
					});
				}
				else {
					console.log("update err");
					console.log(err);
				}
			});
		}
		else {
			console.log("customer signUp");
			connection.query('select MAX(customerId) as cid from customer', function (err, rows) {
				if (!err) {
					var customerId = rows[0]['cid'] + 1;
					var sql2 = 'insert into customer (customerId,point,age,gender,phoneNum) values(' + customerId + ',100,' + age + ',"' + gender + '","' + phoneNumber + '");';
					connection.query(sql2, function (err) {
						if (!err) {
							console.log("customer signUp success");
							console.log("customer login");
							const token = jwt.sign({
								id: customerId,
								exp: Math.floor(Date.now() / 1000) + (60 * 60)
							},
								secret);
							var customer = {
								point: 100,
								phoneNumber: phoneNumber,
								customerId: customerId,
								age: age
							};

							res.cookie('customer', customer);
							res.cookie('tok', token);
							res.cookie('customerId', customerId);
							res.cookie('age', age);
							res.json({
								result: 'ok',
								token
							});
						}
						else {
							console.log(err);
							res.status(409).json({ msg: err });
						}
					});
				}
				else {
					console.log(err);
					res.status(409).json({ msg: err });
				}
			});
		}
	});
});

module.exports = router;
