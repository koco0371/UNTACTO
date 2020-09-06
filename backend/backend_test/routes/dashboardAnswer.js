/dashboardAnswer.js*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const cookieParser = require('cookie-parser');
const url = require('url');
const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');

router.use(cookieParser());

router.get('/', function (req, res, next) {
	var companyId = res.locals.query.companyId;
	if (companyId == 'undefined')
		companyId = res.locals.userId;

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
	*					sql query
	***********************************************/
	var sql_count = 'select count(*) as cnt from survey where userId=\'' + companyId + '\'';
	var sql_list = 'select surveyId, title from survey where userId=\'' + companyId + '\'';
	var sql_duration = 'select beginsAt, expiresAt from survey where userId=\'' + companyId + '\'';
	var sql_customer = 'select surveyId, customerId, createdAt, count(distinct surveyId, userId, customerId) as cnt from answer where userId=\'' + companyId + '\' group by surveyId, userId, customerId';
	/***********************************************
	*					variables
	***********************************************/
	var check_err = false;
	var x = new Array();
	var begins_date = new Date();
	var expires_date = new Date();

	var bySurvey = new Array();

	var byGender = new Array();

	var byAge = new Object();
	var group_age_1 = new Array(); //~20
	var group_age_2 = new Array(); //20~29
	var group_age_3 = new Array(); //30~39
	var group_age_4 = new Array(); //40~49
	var group_age_5 = new Array(); //50~59
	var group_age_6 = new Array(); //60~
	var group_man = new Array();

	var result_count = new Object();
	var result_list = new Object();
	var result_duration = new Object();
	var result_customer = new Object();
	var result_answers = new Object();

	var duration = 0;
	var count_survey = 0;
	/***********************************************
	*					result
	***********************************************/
	var group_woman = new Array();
	var group_categories = new Array();
	var x_gender = new Array();

	/***********************************************
	*					function
	***********************************************/
	function input_age(a, b, c, d, e, f) {
		group_age_1.push(a);
		group_age_2.push(b);
		group_age_3.push(c);
		group_age_4.push(d);
		group_age_5.push(e);
		group_age_6.push(f);
	}
	/***********************************************
	*					DB
	***********************************************/
	connection.query(sql_count, function (err_count, rows_count, fields_count) {
		if (!err_count) {
			result_count = rows_count;
		} else {
			throw err_count;
		}
	});
	connection.query(sql_duration, function (err_duration, rows_duration, fields_duration) {
		if (!err_duration) {
			result_duration = rows_duration;
		} else {
			throw err_duration;
		}
	});
	connection.query(sql_list, function (err_list, rows_list, fields_list) {
		if (!err_list) {
			result_list = rows_list;
		} else {
			throw err_list;
		}
	});
	//set byGender, byAge
	connection.query(sql_customer, function (err_chart, rows_chart, fields_chart) {
		if (!err_chart) {
			result_customer = rows_chart;
		} else {
			throw err_chart;
		}
	});
	/***********************************************
	*					result	
	***********************************************/
	connection.query(sql_list, function (err, rows, fields) {
		if (!err) {
			//-------------------------------------------------
			//init data & get the number of surveys	

			count_survey = result_count[0]['cnt'];

			//-------------------------------------------------
			//set duration of chart


			if (result_duration[0] == null)
				check_err = true;

			//set begins_date, expires_date
			if (!check_err) {
				x.push('x');
				begins_date = moment(result_duration[0]['beginsAt']).format('YYYY-MM-DD');
				expires_date = moment(result_duration[0]['expiresAt']).format('YYYY-MM-DD');
				var today = new Date();

				//set duration
				for (var i = 1; i < count_survey; i++) {
					tmp_begins = moment(result_duration[i]['beginsAt']).format('YYYY-MM-DD');
					tmp_expires = moment(result_duration[i]['expiresAt']).format('YYYY-MM-DD');
					if (begins_date > tmp_begins)
						begins_date = tmp_begins;
					if (expires_date < tmp_expires)
						expires_date = tmp_expires;
				}
				var tmp_begin = (moment(today) - moment(begins_date)) / (1000 * 24 * 60 * 60);
				//limit duration
				if (parseInt(tmp_begin) > 30) {
					begins_date = moment(today).subtract(30, 'days').format('YYYY-MM-DD');
				}
				duration = (moment(expires_date) - moment(begins_date)) / (1000 * 24 * 60 * 60);

				//set days into 'x'
				var date = moment(begins_date);
				for (var i = 0; i <= duration; i++) {
					date = moment(date).format('YYYY-MM-DD');
					x.push(date);
					date = moment(date).add(1, 'days');
				}
				bySurvey.push(x);
			}

			//-------------------------------------------------
			//set bySurvey

			//set survey title
			if (!check_err)
				bySurvey.push(new Array('total'));

			for (var idx = 0; idx < count_survey; idx++) {
				bySurvey.push(new Array(result_list[idx]['title']));
			}
			for (var idx = 0; i < result_list.length; idx++) {
				var s_id = result_list[idx]['surveyId'];
				group_categories[s_id] = result_list[idx]['title'];
				console.log('title: ' + group_categories[s_id]);
			}

			//count the number of surveys
			for (var i = 1; i <= duration + 1; i++) {
				var sql_answer = 'select surveyId, customerId, count(distinct surveyId, userId, customerId) as cnt from answer where userId=\''
					+ companyId + '\' and createdAt between \'' + x[i] + ' 00:00:00\' and \'' + x[i] + ' 23:59:59\' group by surveyId';
				connection.query(sql_answer, function (err_answer, rows_answer, fields_answer) {
					if (!err_answer) {
						//add idx for counting
						for (var idx = 2; idx <= count_survey + 1; idx++) {
							bySurvey[idx].push(0);
						}
						//the number of answers of each surveys
						var sum = 0;
						if (rows_answer.length != 0) {
							var obj = rows_answer;
							for (var idx = 0; idx < obj.length; idx++) {
								bySurvey[obj[idx]['surveyId'] + 1].pop();
								bySurvey[obj[idx]['surveyId'] + 1].push(obj[idx]['cnt']);
								sum += obj[idx]['cnt'];
							}
						}
						if (result_duration[0] != null)
							bySurvey[1].push(sum);
					} else {
						throw err_answer;
					}
				});
			}

			//-------------------------------------------------
			// set byAge, byGender 

			//init data
			group_categories = new Array(count_survey);
			if (!check_err) {
				group_man[0] = 'man';
				group_woman[0] = 'woman';
				for (var i = 0; i < count_survey; i++) {
					group_age_1[i] = 0;
					group_age_2[i] = 0;
					group_age_3[i] = 0;
					group_age_4[i] = 0;
					group_age_5[i] = 0;
					group_age_6[i] = 0;
					group_man[i + 1] = 0;
					group_woman[i + 1] = 0;
				}
			}

			//select surveyId, customerId, age, gender
			var sql_customerInfo = 'select answer.surveyId, title, answer.customerId, age, gender '
				+ 'from answer join customer join survey '
				+ 'where answer.userId=' + companyId + ' and answer.customerid=customer.customerId and answer.surveyId=survey.surveyId '
				+ 'group by answer.surveyId, answer.userId, answer.customerId';
			connection.query(sql_customerInfo, function (err_customerInfo, rows_customerInfo, fields_customerInfo) {
				if (!err_customerInfo) {
					for (var idx = 0; idx < rows_customerInfo.length; idx++) {
						var surveyId = rows_customerInfo[idx]['surveyId'] - 1;
						var age = rows_customerInfo[idx]['age'];
						//set byAge
						if (age <= 19) {
							group_age_1[surveyId] += 1;
						} else if (age <= 29) {
							group_age_2[surveyId] += 1;
						} else if (age <= 39) {
							group_age_3[surveyId] += 1;
						} else if (age <= 49) {
							group_age_4[surveyId] += 1;
						} else if (age <= 59) {
							group_age_5[surveyId] += 1;
						} else {
							group_age_6[surveyId] += 1;
						}

						//set gender_data
						var gender = rows_customerInfo[idx]['gender'];
						if (gender == 'male') {
							group_man[surveyId + 1] += 1;
						} else {
							group_woman[surveyId + 1] += 1;
						}
					}
				} else {
					throw err_customerInfo;
				}
			});
			//set gender_title
			for (idx = 0; idx < result_list.length; idx++) {
				var title = result_list[idx]['title'];
				group_categories[idx] = title;
			}

			//-------------------------------------------------
			// send result
			connection.query(sql_list, function (err2, rows2, fields2) {
				if (!err2) {
					if (!check_err) {
						byAge = {
							'~20': group_age_1,
							'20~29': group_age_2,
							'30~39': group_age_3,
							'40~49': group_age_4,
							'50~59': group_age_5,
							'60~': group_age_6,
						};
						byGender = {
							data: [group_man, group_woman],
							categories: group_categories,
						};
						res.json({
							bySurvey: bySurvey,
							byGender: byGender,
							byAge: byAge
						});
					} else {
						res.json({
							bySurvey: null,
							byGender: null,
							byAge: null
						});
					}
				} else {
					throw err2;
				}
			});
		} else {
			throw err;
		}
	});
});

module.exports = router;
