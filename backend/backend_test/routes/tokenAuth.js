const jwt = require('jsonwebtoken');
const secret = "ThISisSecRETKey";
require('dotenv').config();

const verifyToken = (req,res,next) =>{
	try{
		const clientToken = req.cookies.user;
		const decoded = jwt.verify(clientToken,secret);

		if(decoded){
			res.locals.userId=decoded.companyId;
			next();
		}
		else{
			res.status(401).json({	error: 'unauthorized'});
		}
	}
	catch(err){
		res.status(401).json({ error: 'token expired'});
	}
};

exports.verifyToken = verifyToken;
