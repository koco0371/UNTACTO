/signUp.js*/
var express = require('express');
var router = express.Router();

var mysql = require('mysql');

router.post('/', function (req, res, next) {
    var companyName = req.body['companyName'];
    var password = req.body['password'];
	var email = req.body['email'];
    var connection = mysql.createConnection({
        host: 'localhost',
        post: 3306,
        user: 'admin',
        password: 'a103',
        database: 'project1'
	});
    connection.connect();
	
	var sql = 'insert into company (companyId, companyName, password, email) values(';
	connection.query('select COUNT(*) as cnt from company', function(err, rows){
		if(!err){
			console.log("select success");
			sql = sql + (rows[0]['cnt']);
			console.log(sql);
			sql = sql +  ",'"+companyName+"','"+password+"','"+email+"');";
			console.log(sql);
			connection.query(sql, function (err) {
		        if (!err) {
					res.send("success");
				} else {
					console.log(err);
					res.send('failed');
				}
			});
		} else {
			console.log("select failed");
		}
	});
});

module.exports = router;
