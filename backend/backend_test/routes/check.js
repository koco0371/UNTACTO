/check.js*/
var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')

var mysql = require('mysql');

router.use(cookieParser());

router.get('/', function (req, res, next) {
	var user = req.cookies.user;
	var companyName = req.cookies.companyName;
	var companyId = req.cookies.companyId;
	res.json({
		'user': user,
		'companyName': companyName,
		'companyId': companyId,
	});
});

module.exports = router;
