/createSurvey.js*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const storage=multer.diskStorage({
	destination: (req,file,cb)=>{
		cb(null, 'upload/');
	},
	filename: (req,file,cb) => {
		const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
		cb(null,newFilename);
	}
});

const upload = multer({ storage });

router.post('/',upload.single('video'), function(req,res,next) {
		if(req.file!=undefined){
		console.log("upload success");
		var title = req.body['title'];
		var explain = req.body['description'];
		var selectedKiosk = req.body['selectedKiosk'];
		let file = req.file;
		var companyId = res.locals.userId;
		var videoPath = path.join(__dirname+'/../'+file.path);
		var connection = mysql.createConnection({
			host: 'localhost',
			post: 3306,
			user: 'admin',
			password: 'a103',
			database: 'project1'
			});
		connection.connect();
		var sql = 'select COUNT(*) as num from survey where companyId='+companyId+';'
		connection.query(sql,function(err,rows,fields){
			console.log(rows);
			var num=rows[0]['num']+1;
			sql = 'insert into survey (surveyId,companyId,title,location,video,description_survey) values('+num+','+companyId+',"'+title+'","'+selectedKiosk+'","'+videoPath+'","'+explain+'")';
			connection.query(sql,function(err){
				connection.end();
				if(!err){
						console.log("insert success");
					res.json({
						result: "ok"
					});
				}
				else{
					console.log("insert error");
					console.log(err);
					res.status(403).json({
						message: err
					});
				}
			});
		});
		}
		else{
			console.log("upload fail");
			res.status(403).json({
				message:"error"
			});
		}
});
module.exports = router;
