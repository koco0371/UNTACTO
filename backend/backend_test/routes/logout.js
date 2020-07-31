/logout.js*/
var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')

var mysql = require('mysql');

router.use(cookieParser());

router.post('/', function (req, res, next) {
	console.log('logout: ' + req.cookies.user + '.');
	res.clearCookie('user');
	res.clearCookie('companyName');
	res.clearCookie('companyId');
    res.redirect('/');
});

module.exports = router;

