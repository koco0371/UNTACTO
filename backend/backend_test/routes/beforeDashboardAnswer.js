/beforeDashboardAnswer.js*/
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const dashboardAnswerRouter = require('./dashboardAnswer');
const {	verifyToken	} = require('./tokenAuth');

router.use(cookieParser());
router.get('/',verifyToken, dashboardAnswerRouter);
module.exports = router;
