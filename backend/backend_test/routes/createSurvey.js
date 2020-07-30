/createSurvey.js*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const multer = require('multer');
const upload = multer({ dest: 'upload/'});

router.post('/upload',upload.single("video"), function(req,res,next) {
		var title = req.body['title'];
		var explain = req.body['description'];
		var selectedKiosk = req.body['selectedKiosk'];
		let file = req.file;
		var companyId = req.locals.userId;
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
					res.stauts(403).json({
						message: err
					});
				}
		});
});

module.exports = router;
