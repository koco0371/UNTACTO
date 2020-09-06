/beforeAdminListSurvey.js*/
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const adminListSurveyRouter = require('./adminListSurvey');
const {	verifyTokenAdmin	} = require('./tokenAuth');

router.use(cookieParser());
router.get('/',verifyTokenAdmin, adminListSurveyRouter);
module.exports = router;
