/check.js*/
var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')

var mysql = require('mysql');

router.use(cookieParser());

router.get('/', function (req, res, next) {
	console.log('logout');
	var user = null;
	res.send(user);
	res.redirect('/');
});

module.exports = router;
