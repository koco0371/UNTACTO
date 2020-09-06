/login.js*/
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mysql = require('mysql');
var bcrypt = require('bcrypt');
const secret = "ThISisSecRETKeY";

router.post('/', function (req, res, next) {
	var saltRounds = 10;
	var email = req.body['email'];
	var password = req.body['password'];
	var connection = mysql.createConnection({
		host: 'localhost',
		post: 3306,
		user: 'admin',
		password: '####',
		database: '####'
	});
	connection.connect();

	connection.query('select * from user where email=\'' + email + '\';', function (err, rows, fields) {
		if (!err) {
			bcrypt.compare(password, rows[0]['password'], function (err_hash, result) {
				if (result) {
					if (rows[0] != undefined) {
						const token = jwt.sign({
							id: rows[0]['userId'],
							exp: Math.floor(Date.now() / 1000) + (60 * 60)
						},
							secret);
						var user = {
							companyName: rows[0]['userName'],
							companyId: rows[0]['userId']
						};

						res.cookie('user', user);
						res.cookie('tok', token);
						res.cookie('companyName', rows[0]['userName']);
						res.cookie('companyId', rows[0]['userId']);
						res.json({
							result: 'ok',
							token
						});
					}
				} else {
					res.status(403).json({
						message: 'your password is incorrect'
					});
				}
			});
		} else {
			res.status(403).json({
				message: err
			});
		}
	});
});

module.exports = router;

