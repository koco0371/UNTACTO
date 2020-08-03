/check.js*/
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
var { verifyToken } = require('./tokenAuth');

var mysql = require('mysql');

router.use(cookieParser());

router.get('/', verifyToken, function (req, res, err) {
	var user = req.cookies.user;
	var companyName = req.cookies.companyName;
	var companyId = req.cookies.companyId;
	if(user == null){
		res.send('');
	} else {
	res.json({
			'user': user,
			'companyName': companyName,
			'companyId': companyId,
		});
	}
});

module.exports = router;

