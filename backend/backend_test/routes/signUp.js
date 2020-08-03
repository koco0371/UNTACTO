/signUp.js*/
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mysql = require('mysql');
const secret="ThISisSecRETKeY";

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
			var companyId=rows[0]['cnt'] + 1;
			sql = sql + companyId;
			sql = sql +  ",'"+companyName+"','"+password+"','"+email+"');";
			connection.query(sql, function (err) {
		        if (!err) {
					console.log("signUp success");
					console.log("login");
					const token = jwt.sign({
						id:companyId,
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
					console.log(err);
					res.status(409).json({msg:err});
				}
			});
		} else {
			console.log("select failed");
			res.status(409).json({msg:err});
		}
	});
});

module.exports = router;

