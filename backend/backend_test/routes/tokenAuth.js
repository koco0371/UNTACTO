const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const secret = "ThISisSecRETKeY";

router.use(cookieParser());

const verifyToken = (req,res,next) =>{
	try{
		const clientToken = req.cookies.tok;
		const decoded = jwt.verify(clientToken,secret);
		console.log(decoded)

		if(decoded){
			console.log("success token");
			res.locals.userId=decoded.id;
			next();
		}
		else{
			console.log("unauthorized token");
			res.status(401).json({	error: 'unauthorized'});
		}
	}
	catch(err){
		console.log(err);
		console.log("token expired");
		res.status(401).json({ error: 'token expired'});
	}
};

const verifyTokenCustomer = (req,res,next) =>{
	try{
		const customerToken = req.cookies.tok;
		const decoded = jwt.verify(customerToken,secret);
		console.log(decoded);

		if(decoded){
			console.log("success token");
			res.locals.customerId = decoded.id;
			next();
		}
		else{
			console.log("unauthorized token");
			res.status(401).json({error: 'unauthorized'});
		}
	}
	catch(err){
		console.log(err);
		console.log("token expired");
		res.status(401).json({error: 'token expired'});
	}
};

const verifyTokenAdmin = (req,res,next) =>{
	try{
		const adminToken = req.cookies.tok;
		const decoded = jwt.verify(adminToken,secret);
		console.log(decoded);

		if(decoded){
			if(decoded.id==1){
				console.log("success token");
				res.locals.userId = decoded.id;
				next();
			}
			else{
				console.log("Not admin token");
				res.status(403).json({error:'not admin token'});
			}
		}
		else{
			console.log("unauthorized token");
			res.status(401).json({error: 'unauthorized'});
		}
	}
	catch(err){
		console.log(err);
		console.log("token expired");
		res.status(401).json({error: 'token expired'});
	}
};

exports.verifyToken = verifyToken;
exports.verifyTokenCustomer = verifyTokenCustomer;
exports.verifyTokenAdmin = verifyTokenAdmin;
