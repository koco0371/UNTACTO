/login.js*/
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mysql = require('mysql');

const secret="ThISisSecRETKeY";

router.post('/', function (req, res, next) {
    var email = req.body['email'];
    var password = req.body['password'];
    var connection = mysql.createConnection({
        host: 'localhost',
        post: 3306,
        user: 'admin',
        password: 'a103',
        database: 'project1'
	});
    connection.connect();
	
    connection.query('select * from company where email=\'' + email + '\' and password=\'' + password + '\'', function (err, rows, fields) {
        if (!err) {
            if (rows[0]!=undefined) {
				console.log("login");
				const token = jwt.sign({
					id:rows[0]['companyId'],
					exp:Math.floor(Date.now()/1000) + (60*60)
				},
				secret);
				res.cookie('user', token);
				res.cookie('companyName', rows[0]['companyName']);
				res.cookie('companyId', rows[0]['companyId']);
				res.json({
					result: 'ok',
					token
				});
			} else {
				res.status(403).json({
					message: err
				})
            }

        } else {
			res.status(403).json({
				message: err
			})
        }
    });
});

module.exports = router;

