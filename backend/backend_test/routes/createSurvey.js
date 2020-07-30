/createSurvey.js*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const multer = require('multer');
const { verifyToken } = require('./tokenAuth');
const upload = multer({ dest: 'upload/'});

const uploadSurvey = (req,res,err) =>{
	try{
		upload.single("file");
		let file = req.file;
		if(req.file!=undefined){
			console.log("upload success");
		}
		else{
			console.log("upload fail");
			res.send(err);
		}
	}
	catch(err){
		console.log(err);
		console.log("upload error");
		res.send(err);
	}
}
/*
router.post('/',upload.single("file"), function(req,res,next) {
		console.log(req.file);
		var title = req.body['title'];
		var explain = req.body['description'];
		var selectedKiosk = req.body['selectedKiosk'];
		let file = req.file;
		var companyId = 1;
		var videoPath = path.join(__dirname, file.originalname);
		var connection = mysql.createConnection({
			host: 'localhost',
			post: 3306,
			user: 'admin',
			password: 'a103',
			database: 'project1'
			});
		connection.connect();
		var sql = 'insert into survey (surveyId,companyId,title,location,video,description_survey) values(1,'+companyId+',"'+title+'","'+selectedKiosk+'","'+videoPath+'","'+explain+'")';
		connection.query(sql,function(err){
				if(!err){
					console.log("insert success");
					res.json({
						result: "ok"
					});
				}
				else{
					console.log("insert error");
					res.stauts(403).json({
						message: err
					});
				}
		});
});
*/
//module.exports = router;
exports.uploadSurvey=uploadSurvey
