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
				const token = jwt.sign({
					companyId :rows[0]['companyId']
				},
				secret,{
					expiresIn: '1hour'
				});
				res.cookie('user', token);
				res.json({
					result: 'ok',
					token
				});
				res.status(200);
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
