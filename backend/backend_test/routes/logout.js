/logout.js*/
var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')

router.use(cookieParser());

router.post('/', function (req, res, next) {
	res.clearCookie('user');
	res.clearCookie('companyName');
	res.clearCookie('companyId');
	res.clearCookie('tok');
	res.redirect('/');
});

module.exports = router;

