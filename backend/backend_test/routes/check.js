/check.js*/
var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')

var mysql = require('mysql');

router.use(cookieParser());

router.get('/', function (req, res, next) {
	var user = req.cookies.user;
	//res.redirect('/');
	res.send(user);
});

module.exports = router;
