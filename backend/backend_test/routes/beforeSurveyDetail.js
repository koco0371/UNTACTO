/beforeSurveyDetail.js*/
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const surveyDetailRouter = require('./surveyDetail');
const {	verifyToken	} = require('./tokenAuth');

router.use(cookieParser());
router.get('/',verifyToken, surveyDetailRouter);
module.exports = router;
