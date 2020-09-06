/showSurveyList.js*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const cookieParser = require('cookie-parser');
const url = require('url');

router.use(cookieParser());

router.get('/', function (req, res, next) {
	var companyId = res.locals.query.companyId;
	if (companyId == 'undefined') {
		companyId = res.locals.userId;
	}

	//connect DB
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
	var sql_count = 'select count(*) as cnt from survey where userId=\'' + companyId + '\'';
	var sql_list = 'select * from survey where userId=\'' + companyId + '\'';
	var sql_company = 'select userId, userName from user where userId=\'' + companyId + '\'';
	var sql_kiosk = 'select * from kiosk';
	var sql_kiosk_count = 'select count(*) as k_cnt from kiosk';
	/***********************************************
	*                   variables
	***********************************************/
	var k_cnt;
	var count_survey;
	var kiosk = new Array();
	var company_information = new Object();
	/***********************************************
	*                   DB
	***********************************************/
	//count kiosk list
	connection.query(sql_kiosk_count, function (err_k_cnt, rows_k_cnt, fields_k_cnt) {
		if (!err_k_cnt) {
			k_cnt = rows_k_cnt[0]['k_cnt'];
		} else {
			throw err_k_cnt;
		}
	});
	//get kiosk list
	connection.query(sql_kiosk, function (err_kiosk, rows_kiosk, fields_kiosk) {
		if (!err_kiosk) {
			for (var i = 0; i < k_cnt; i++) {
				kiosk.push(rows_kiosk[i]);
			}
		} else {
			throw err_kiosk;
		}
	});
	//count survey list	
	connection.query(sql_count, function (err_count, rows_count, fields_count) {
		if (!err_count) {
			count_survey = rows_count[0]['cnt'];
		} else {
			throw err_count;
		}
	});
	//get information about a company
	connection.query(sql_company, function (err_company, rows_company, fields_company) {
		if (!err_company) {
			//for converting attribute name from 'user*' to 'company*'
			company_information = rows_company[0];
			company_information.companyId = company_information.userId;
			company_information.companyName = company_information.userName;
			delete company_information.userId;
			delete company_information.userName;
		} else {
			throw err_company;
		}
	});
	//send data of surveys list
	connection.query(sql_list, function (err_list, rows_list, fields_list) {
		if (!err_list) {
			var survey_list = new Array();
			for (var i = 0; i < count_survey; i++) {
				var kioskId = rows_list[i].kioskId;
				var description = rows_list[i].description_survey;
				delete rows_list[i].companyId;
				delete rows_list[i].userId;
				delete rows_list[i].kioskId;
				delete rows_list[i].description_survey;
				rows_list[i].user = company_information;
				rows_list[i].kiosk = kiosk[kioskId - 1];
				rows_list[i].description = description;
				survey_list.push(rows_list[i]);
			}
			if (survey_list.length)
				res.json(survey_list);
			else
				res.json(null);
		} else {
			throw err_list;
		}
	});
});

module.exports = router;
