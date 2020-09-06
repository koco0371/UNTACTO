const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const createSurveyRouter = require('./createSurvey');
const { verifyToken } = require('./tokenAuth');

router.use(cookieParser());

router.post('/',verifyToken, createSurveyRouter);

module.exports = router;
