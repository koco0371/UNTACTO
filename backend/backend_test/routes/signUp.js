/signUp.js*/
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mysql = require('mysql');
var bcrypt = require('bcrypt');
const secret = "ThISisSecRETKeY";

router.post('/', function (req, res, next) {
	var saltRounds = 10;
	var userName = req.body['companyName'];
	var password = req.body['password'];
	var email = req.body['email'];

	var connection = mysql.createConnection({
		host: 'localhost',
		post: 3306,
		user: 'admin',
		password: '####',
		database: '####'
	});
	connection.connect();

	var sql = 'insert into user (userId, userName, password, email) values(';
	connection.query('select MAX(userId) as cnt from user', function (err, rows) {
		if (!err) {
			bcrypt.hash(password, saltRounds, function (err_hash, hash) {
				var userId = rows[0]['cnt'] + 1;
				sql = sql + userId;
				sql = sql + ",'" + userName + "','" + hash + "','" + email + "');";
				connection.query(sql, function (err) {
					if (!err) {
						console.log("signUp success");
						console.log("login");
						const token = jwt.sign({
							id: userId,
							exp: Math.floor(Date.now() / 1000) + (60 * 60)
						},
							secret);
						var user = {
							companyName: userName,
							companyId: userId
						};
						res.cookie('user', user);
						res.cookie('tok', token);
						res.cookie('companyName', userName);
						res.cookie('companyId', userId);
						res.json({
							result: 'ok',
							token
						});
					} else {
						console.log(err);
						res.status(409).json({ msg: err });
					}
				});
			});
		} else {
			console.log("select failed");
			res.status(409).json({ msg: err });
		}
	});
});

module.exports = router;

