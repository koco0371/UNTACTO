/adminReadSurvey.js*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const cookieParser = require('cookie-parser');
const url = require('url');

router.use(cookieParser());

router.get('/', function (req, res, next) {
	var companyId = res.locals.companyId;
	if (companyId == 'undefined') {
		companyId = res.locals.userId;
	}
	var surveyId = res.locals.surveyId;

	var connection = mysql.createConnection({
		host: 'localhost',
		post: 3306,
		user: 'admin',
		password: '####',
		database: '####'
	});
	connection.connect();
	/***********************************************
	*                   sql query
	***********************************************/
	var sql_survey_detail = 'select * from survey where userId=' + companyId + ' and surveyId=' + surveyId + ';';
	var sql_survey_kiosk = 'select * from kiosk where kioskId='
	var sql_survey_company = 'select userId, userName from user where userId=' + companyId + ';';
	/***********************************************
	*                   variables
	***********************************************/
	var survey_detail = new Array();
	var survey_kiosk = new Object();
	var survey_company = new Object();
	/***********************************************
	*                   DB
	***********************************************/
	connection.query(sql_survey_detail, function (err_detail, rows_detail, fields_detail) {
		if (!err_detail) {
			survey_detail = rows_detail[0];
			sql_survey_kiosk += rows_detail[0]['kioskId'] + ';';
			//change kiosk info
			connection.query(sql_survey_kiosk, function (err_kiosk, rows_kiosk, fields_kiosk) {
				if (!err_kiosk) {
					survey_detail.kiosk = JSON.stringify(rows_kiosk[0]);
				} else {
					throw err_kiosk;
				}
			});
			//change company info and send json data
			connection.query(sql_survey_company, function (err_company, rows_company, fields_company) {
				if (!err_company) {
					survey_detail.user = JSON.stringify({
						userId: rows_company[0]['userId'],
						companyName: rows_company[0]['userName'],
					});
					delete survey_detail.userId;
					delete survey_detail.kioskId;
					res.json(survey_detail);
				} else {
					throw err_company;
				}
			});
		} else {
			throw err_detail;
		}
	});
});

module.exports = router;
