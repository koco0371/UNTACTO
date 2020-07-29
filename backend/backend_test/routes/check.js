/check.js*/
var express = require('express');
var router = express.Router();

var mysql = require('mysql');

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
                res.send('email : ' + rows[0]['email'] + '<br>' +
                    'password : ' + rows[0]['password']);
            } else {
                res.send('no data');
            }

        } else {
            res.send('error : ' + err);
        }
    });
});

module.exports = router;
