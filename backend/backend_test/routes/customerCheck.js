/customerCheck.js*/
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
var { verifyTokenCustomer } = require('./tokenAuth');

var mysql = require('mysql');

router.use(cookieParser());

router.get('/', verifyTokenCustomer, function (req, res, err) {
	var customer = req.cookies.customer;
	var customerId = req.cookies.customer.customerId;
	var token = req.cookies.tok;
	var phoneNumber = req.cookies.customer.phoneNumber;
	var point = req.cookies.customer.point;
	var age = req.cookies.age;
	console.log(phoneNumber);
	if(customer == null){
		res.send('');
	} else {
	res.json({
			'phoneNumber':phoneNumber,
			'point':point,
			'customer':customer,
			'customerId':customerId,
			'token':token
		});
	}
});

module.exports = router;

