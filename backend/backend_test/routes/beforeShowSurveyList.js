/beforeShowSurveyList.js*/
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const showSurveyListRouter = require('./showSurveyList');
const {	verifyToken	} = require('./tokenAuth');

router.use(cookieParser());
router.get('/',verifyToken, showSurveyListRouter);
module.exports = router;
