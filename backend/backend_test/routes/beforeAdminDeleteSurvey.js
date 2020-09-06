/beforeAdminDeleteSurvey.js*/
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const adminDeleteSurveyRouter = require('./adminDeleteSurvey');
const {	verifyTokenAdmin	} = require('./tokenAuth');

router.use(cookieParser());
router.delete('/',verifyTokenAdmin, adminDeleteSurveyRouter);
module.exports = router;
