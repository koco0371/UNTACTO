/surveyDetailAnswer.js*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

router.get('/', function (req, res, next) {
	var userId = res.locals.userId;
	var surveyId = res.locals.id;
	var connection = mysql.createConnection({
		host: 'localhost',
		post: 3306,
		user: 'admin',
		password: '####',
		database: '####'
	});
	connection.connect();
	var sql_all = "select emotions,timeIndex,customerId from answer where userId = " + userId + " and surveyId = " + surveyId + " order by timeIndex asc;";
	var sql1 = "select COUNT(*) as cnt from answer where userId = " + userId + " and surveyId= " + surveyId + ";";
	var sql2 = "select COUNT(distinct customerId) as max from answer where userId = " + userId + " and surveyId= " + surveyId + ";";
	var sql3 = "select MAX(timeIndex) as max from user where userId= " + userId + " and surveyId= " + surveyId + ";";
	var sql4 = "select distinct customerId from answer where userId= " + userId + " and surveyId= " + surveyId + ";";
	var sql5 = "select customerId from customer where gender = 'male' and (";
	var sql6 = "select customerId from customer where gender = 'female' and (";
	var sql7 = "select customerId from customer where age >= 30 and (";
	var sql8 = "select customerId from customer where age < 30 and (";
	var sql_chart = "select emotions,timeIndex,customerId from answer where userId= " + userId + " and surveyId = " + surveyId + " and (";

	var anger = new Array();
	var contempt = new Array();
	var disgust = new Array();
	var fear = new Array();
	var happiness = new Array();
	var neutral = new Array();
	var sadness = new Array();
	var surprise = new Array();
	var customer_female = new Array();
	var customer_male = new Array();
	var customer_young = new Array();
	var customer_old = new Array();
	var cnt;
	var customer_cnt;
	var total, male, female, young, old;
	total = new Array();
	male = new Array();
	female = new Array();
	young = new Array();
	old = new Array();
	connection.query(sql1, function (err, rows, fields) {
		if (!err) {
			cnt = rows[0]['cnt'];
		}
	});
	connection.query(sql2, function (err, rows, fields) {
		if (!err) {
			customer_cnt = rows[0]['max'];
		}
	});
	connection.query(sql3, function (err, rows, fields) {
		if (!err) {
			max_timer = rows[0]['max'];
		}
	});
	connection.query(sql4, function (err, rows, fields) {
		if (!err) {
			for (var i = 0; i < customer_cnt; i++) {
				sql5 += " customerId = " + rows[i]['customerId'];
				sql6 += " customerId = " + rows[i]['customerId'];
				sql7 += " customerId = " + rows[i]['customerId'];
				sql8 += " customerId = " + rows[i]['customerId'];
				if (i != customer_cnt - 1) {
					sql5 += " or";
					sql6 += " or";
					sql7 += " or";
					sql8 += " or";
				}
			}
			sql5 += ");";
			sql6 += ");";
			sql7 += ");";
			sql8 += ");";

			//male chart
			connection.query(sql5, function (err2, rows2, fields2) {
				if (!err2) {
					var i = 0;
					var sql_male = sql_chart;
					while (rows2[i] != undefined) {
						customer_male.push(rows2[i]['customerId']);
						sql_male += " customerId = " + rows2[i]['customerId'];
						i++;
						if (rows2[i] != undefined) {
							sql_male += " or";
						}
					}
					var max = i;
					console.log("max: " + max);
					sql_male += ") order by timeIndex asc;";
					connection.query(sql_male, function (err3, rows3, fields3) {
						anger = new Array();
						anger.push('anger');
						contempt = new Array();
						contempt.push('contempt');
						disgust = new Array();
						disgust.push('disgust');
						fear = new Array();
						fear.push('fear');
						happiness = new Array();
						happiness.push('happiness');
						neutral = new Array();
						neutral.push('neutral');
						sadness = new Array();
						sadness.push('sadness');
						surprise = new Array();
						surprise.push('surprise');
						if (!err3) {
							console.log("select male success");
							var emotions = new Array();
							var i = 0;
							while (rows3[i] != undefined) {
								var emotion = JSON.parse(rows3[i]['emotions']);
								emotions.push(emotion);
								i++;
							}
							i = 0;
							//male's emotion sum during 15sec. This is for firstChart
							while (rows3[i] != undefined) {
								var sum_anger = 0;
								var sum_contempt = 0;
								var sum_disgust = 0;
								var sum_fear = 0;
								var sum_happiness = 0;
								var sum_neutral = 0;
								var sum_sadness = 0;
								var sum_surprise = 0;
								for (var j = 0; j < max; j++) {
									sum_anger += emotions[i].anger;
									sum_contempt += emotions[i].contempt;
									sum_disgust += emotions[i].disgust;
									sum_fear += emotions[i].fear;
									sum_happiness += emotions[i].happiness;
									sum_neutral += emotions[i].neutral;
									sum_sadness += emotions[i].sadness;
									sum_surprise += emotions[i].surprise;
									if (j < max - 1)
										i++;
								}
								anger.push(sum_anger / max);
								contempt.push(sum_contempt / max);
								disgust.push(sum_disgust / max);
								fear.push(sum_fear / max);
								happiness.push(sum_happiness / max);
								neutral.push(sum_neutral / max);
								sadness.push(sum_sadness / max);
								surprise.push(sum_surprise / max);
								i++;
							}
							male.push(anger);
							male.push(contempt);
							male.push(disgust);
							male.push(fear);
							male.push(happiness);
							male.push(neutral);
							male.push(sadness);
							male.push(surprise);
						}
						else {
							console.log("select male error");
							male = null;
							console.log(err3);
						}
					});

				}
				else {
					console.log("male select error");
					console.log(err2);
				}
			});

			//female chart
			connection.query(sql6, function (err2, rows2, fields2) {
				if (!err2) {
					var i = 0;
					var sql_female = sql_chart;
					while (rows2[i] != undefined) {
						customer_female.push(rows2[i]['customerId']);
						sql_female += " customerId = " + rows2[i]['customerId'];
						i++
						if (rows2[i] != undefined) {
							sql_female += " or";
						}
					}
					var max = i;
					sql_female += ") order by timeIndex asc;";
					connection.query(sql_female, function (err3, rows3, fields3) {
						anger = new Array();
						anger.push('anger');
						contempt = new Array();
						contempt.push('contempt');
						disgust = new Array();
						disgust.push('disgust');
						fear = new Array();
						fear.push('fear');
						happiness = new Array();
						happiness.push('happiness');
						neutral = new Array();
						neutral.push('neutral');
						sadness = new Array();
						sadness.push('sadness');
						surprise = new Array();
						surprise.push('surprise');
						if (!err3) {

							console.log("select female success");
							var emotions = new Array();
							var i = 0;
							while (rows3[i] != undefined) {
								var emotion = JSON.parse(rows3[i]['emotions']);
								emotions.push(emotion);
								i++;
							}
							i = 0;
							//female's emotion sum during 15sec. This is for firstChart
							while (rows3[i] != undefined) {
								var sum_anger = 0;
								var sum_contempt = 0;
								var sum_disgust = 0;
								var sum_fear = 0;
								var sum_happiness = 0;
								var sum_neutral = 0;
								var sum_sadness = 0;
								var sum_surprise = 0;
								for (var j = 0; j < max; j++) {
									sum_anger += emotions[i].anger;
									sum_contempt += emotions[i].contempt;
									sum_disgust += emotions[i].disgust;
									sum_fear += emotions[i].fear;
									sum_happiness += emotions[i].happiness;
									sum_neutral += emotions[i].neutral;
									sum_sadness += emotions[i].sadness;
									sum_surprise += emotions[i].surprise;
									if (j < max - 1)
										i++;
								}
								anger.push(sum_anger / max);
								contempt.push(sum_contempt / max);
								disgust.push(sum_disgust / max);
								fear.push(sum_fear / max);
								happiness.push(sum_happiness / max);
								neutral.push(sum_neutral / max);
								sadness.push(sum_sadness / max);
								surprise.push(sum_surprise / max);
								i++;
							}
							female.push(anger);
							female.push(contempt);
							female.push(disgust);
							female.push(fear);
							female.push(happiness);
							female.push(neutral);
							female.push(sadness);
							female.push(surprise);

						}
						else {
							console.log("select female error");
							female = null;
							console.log(err3);
						}
					});
				}
				else {
					console.log("female select error");
					console.log(err2);
				}
			});
			//old chart
			connection.query(sql7, function (err2, rows2, fields2) {
				if (!err2) {
					var i = 0;
					var sql_old = sql_chart;
					while (rows2[i] != undefined) {
						customer_old.push(rows2[i]['customerId']);
						sql_old += " customerId = " + rows2[i]['customerId'];
						i++
						if (rows2[i] != undefined) {
							sql_old += " or";
						}
					}
					var max = i;
					sql_old += ") order by timeIndex asc;";
					connection.query(sql_old, function (err3, rows3, fields3) {
						anger = new Array();
						anger.push('anger');
						contempt = new Array();
						contempt.push('contempt');
						disgust = new Array();
						disgust.push('disgust');
						fear = new Array();
						fear.push('fear');
						happiness = new Array();
						happiness.push('happiness');
						neutral = new Array();
						neutral.push('neutral');
						sadness = new Array();
						sadness.push('sadness');
						surprise = new Array();
						surprise.push('surprise');
						console.log("select old success");
						if (!err3) {

							var emotions = new Array();
							var i = 0;
							while (rows3[i] != undefined) {
								var emotion = JSON.parse(rows3[i]['emotions']);
								emotions.push(emotion);
								i++;
							}
							i = 0;
							//male's emotion sum during 15sec. This is for firstChart
							while (rows3[i] != undefined) {
								var sum_anger = 0;
								var sum_contempt = 0;
								var sum_disgust = 0;
								var sum_fear = 0;
								var sum_happiness = 0;
								var sum_neutral = 0;
								var sum_sadness = 0;
								var sum_surprise = 0;
								for (var j = 0; j < max; j++) {
									sum_anger += emotions[i].anger;
									sum_contempt += emotions[i].contempt;
									sum_disgust += emotions[i].disgust;
									sum_fear += emotions[i].fear;
									sum_happiness += emotions[i].happiness;
									sum_neutral += emotions[i].neutral;
									sum_sadness += emotions[i].sadness;
									sum_surprise += emotions[i].surprise;
									if (j < max - 1)
										i++;
								}
								anger.push(sum_anger / max);
								contempt.push(sum_contempt / max);
								disgust.push(sum_disgust / max);
								fear.push(sum_fear / max);
								happiness.push(sum_happiness / max);
								neutral.push(sum_neutral / max);
								sadness.push(sum_sadness / max);
								surprise.push(sum_surprise / max);
								i++;
							}
							old.push(anger);
							old.push(contempt);
							old.push(disgust);
							old.push(fear);
							old.push(happiness);
							old.push(neutral);
							old.push(sadness);
							old.push(surprise);

						}
						else {
							console.log("select old error");
							old = null;
							console.log(err3);
						}
					});
				}
				else {
					console.log("old select error");
					console.log(err2);
				}
			});
			//young chart
			connection.query(sql8, function (err2, rows2, fields2) {
				if (!err2) {
					var i = 0;
					var sql_young = sql_chart;
					while (rows2[i] != undefined) {
						customer_young.push(rows2[i]['customerId']);
						sql_young += " customerId = " + rows2[i]['customerId'];
						i++
						if (rows2[i] != undefined) {
							sql_young += " or";
						}
					}
					var max = i;
					sql_young += ") order by timeIndex asc;";
					connection.query(sql_young, function (err3, rows3, fields3) {
						anger = new Array();
						anger.push('anger');
						contempt = new Array();
						contempt.push('contempt');
						disgust = new Array();
						disgust.push('disgust');
						fear = new Array();
						fear.push('fear');
						happiness = new Array();
						happiness.push('happiness');
						neutral = new Array();
						neutral.push('neutral');
						sadness = new Array();
						sadness.push('sadness');
						surprise = new Array();
						surprise.push('surprise');
						if (!err3) {

							console.log("select young success");
							var emotions = new Array();
							var i = 0;
							while (rows3[i] != undefined) {
								var emotion = JSON.parse(rows3[i]['emotions']);
								emotions.push(emotion);
								i++;
							}
							i = 0;
							//male's emotion sum during 15sec. This is for firstChart
							while (rows3[i] != undefined) {
								var sum_anger = 0;
								var sum_contempt = 0;
								var sum_disgust = 0;
								var sum_fear = 0;
								var sum_happiness = 0;
								var sum_neutral = 0;
								var sum_sadness = 0;
								var sum_surprise = 0;
								for (var j = 0; j < max; j++) {
									sum_anger += emotions[i].anger;
									sum_contempt += emotions[i].contempt;
									sum_disgust += emotions[i].disgust;
									sum_fear += emotions[i].fear;
									sum_happiness += emotions[i].happiness;
									sum_neutral += emotions[i].neutral;
									sum_sadness += emotions[i].sadness;
									sum_surprise += emotions[i].surprise;
									if (j < max - 1)
										i++;
								}
								anger.push(sum_anger / max);
								contempt.push(sum_contempt / max);
								disgust.push(sum_disgust / max);
								fear.push(sum_fear / max);
								happiness.push(sum_happiness / max);
								neutral.push(sum_neutral / max);
								sadness.push(sum_sadness / max);
								surprise.push(sum_surprise / max);
								i++;
							}
							young.push(anger);
							young.push(contempt);
							young.push(disgust);
							young.push(fear);
							young.push(happiness);
							young.push(neutral);
							young.push(sadness);
							young.push(surprise);
						}
						else {
							console.log("select young error");
							young = null;
							console.log(err3);
						}
						res.json({
							total: total,
							young: young,
							old: old,
							male: male,
							female: female
						});
					});
				}
				else {
					console.log("young select error");
					console.log(err2);
				}
			});

		}
	});
	connection.query(sql_all, function (err, rows, fields) {

		anger.push('anger');

		contempt.push('contempt');

		disgust.push('disgust');

		fear.push('fear');

		happiness.push('happiness');

		neutral.push('neutral');

		sadness.push('sadness');

		surprise.push('surprise');
		if (!err) {
			console.log("select total success");

			var emotions = new Array();
			for (var i = 0; i < cnt; i++) {
				var emotion = JSON.parse(rows[i]['emotions']);
				emotions.push(emotion);
			}
			//All user's emotion sum during 15sec. This is for firstChart
			for (var i = 0; i < cnt; i++) {
				var sum_anger = 0;
				var sum_contempt = 0;
				var sum_disgust = 0;
				var sum_fear = 0;
				var sum_happiness = 0;
				var sum_neutral = 0;
				var sum_sadness = 0;
				var sum_surprise = 0;
				for (var j = 0; j < customer_cnt; j++) {
					sum_anger += emotions[i].anger;
					sum_contempt += emotions[i].contempt;
					sum_disgust += emotions[i].disgust;
					sum_fear += emotions[i].fear;
					sum_happiness += emotions[i].happiness;
					sum_neutral += emotions[i].neutral;
					sum_sadness += emotions[i].sadness;
					sum_surprise += emotions[i].surprise;
					if (j != customer_cnt - 1)
						i++;
				}
				anger.push(sum_anger / customer_cnt);
				contempt.push(sum_contempt / customer_cnt);
				disgust.push(sum_disgust / customer_cnt);
				fear.push(sum_fear / customer_cnt);
				happiness.push(sum_happiness / customer_cnt);
				neutral.push(sum_neutral / customer_cnt);
				sadness.push(sum_sadness / customer_cnt);
				surprise.push(sum_surprise / customer_cnt);
			}
			total.push(anger);
			total.push(contempt);
			total.push(disgust);
			total.push(fear);
			total.push(happiness);
			total.push(neutral);
			total.push(sadness);
			total.push(surprise);
		}
		else {
			console.log("select total error");
			total = null;
			console.log(err);
		}
	});
});

module.exports = router;
