/signUp.js*/
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
 
router.post('/', function(req,res,next){
	console.log("1");
	var companyName = req.body['companyName'];
	var password = req.body['password'];
	var connection = mysql.createConnection({
		host:'localhost',
		post: 3306,
		user: 'admin',
		pasword: 'a103',
		database: 'project1'
	});
	connection.connect();

	var sql='insert into company (companyId,companyName,password) values(';
	connection.query('select COUNT(*) from company', function(err,rows){
		if(!err){
			sql+=rows[0];
			sql+=',\''+companyName+'\',\''+password+'\')';
		}
	});
	connection.query(sql, function(err){
		connection.end();
		if(err){
			console.log('query error: ' + err);
			res.send(err);
		}
	});
});
module.exports =router;
