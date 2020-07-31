/createSurvey.js*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const storage=multer.diskStorage({
	destination: (req,file,cb)=>{
		cb(null, '../upload');
	},
	filename: (req,file,cb) => {
		const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
		cb(null,newFilename);
	}
});

const upload = multer({ storage });

const uploadSurvey = (req,res,err) =>{
	try{
		upload.single("video");
		console.log(req.file);
		let file = req.file;
		if(req.file!=undefined){
			console.log("upload success");
			var title = req.body['title'];
			var explain = req.body['description'];
			var selectedKiosk = req.body['selectedKiosk'];
			var companyId = 1;
			var videoPath = path.join(__dirname,file.originalname);
			var connection = mysql.createConnection({
				host:'localhost',
				post: 3306,
				password: 'a103',
				database:'project1'
			});
			conection.connect();
			var sql = 'insert into survey (surveyId,companyId,title,location,video,description_survey) values(1,'+companyId+',"'+title+'","'+selectedKiosk+'","'+videoPath+'","'+explain+'")';
			connection.query(sql,function(err){
					if(!err){
						console.log("insert survey success");
						res.json({
								result:"ok"
						});
					}
					else{
						console.log("insert survey error");
						res.status(403).json({
							message:err
						});
					}
			});

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
exports.uploadSurvey=uploadSurvey
