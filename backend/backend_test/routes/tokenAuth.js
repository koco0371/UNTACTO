const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const secret = "ThISisSecRETKeY";

router.use(cookieParser());

const verifyToken = (req,res,next) =>{
	try{
		console.log(req.cookies);
		const clientToken = req.cookies.user;
		const decoded = jwt.verify(clientToken,secret);

		if(decoded){
			console.log("success token");
			res.locals.userId=decoded.companyId;
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

exports.verifyToken = verifyToken;
