/check.js*/
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
var { verifyToken } = require('./tokenAuth');

var mysql = require('mysql');

router.use(cookieParser());

router.get('/', verifyToken, function (req, res, err) {
	var companyName = req.cookies.companyName;
	var companyId = req.cookies.companyId;
	var user = {
		companyName: companyName,
		companyId: companyId
	};
	if(user == null){ //logout
		res.send('');
	} else { //login
		res.json(user);
	}
});

module.exports = router;

