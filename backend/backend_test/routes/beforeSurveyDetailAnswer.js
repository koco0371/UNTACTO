/beforeSurveyDetailAnswer.js*/
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const surveyDetailAnswerRouter = require('./surveyDetailAnswer');
const {	verifyToken	} = require('./tokenAuth');

router.use(cookieParser());

router.get('/', verifyToken, surveyDetailAnswerRouter);

module.exports = router;

