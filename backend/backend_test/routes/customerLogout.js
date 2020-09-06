/customerLogout.js*/
var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

router.use(cookieParser());

router.post('/', function(req,res,next){
		console.log('logout: ' + req.cookies.customer + '.');
		res.clearCookie('tok');
		res.clearCookie('customer');
		res.clearCookie('customerId');
		res.clearCookie('age');
		res.redirect('/');
});
module.exports = router;

