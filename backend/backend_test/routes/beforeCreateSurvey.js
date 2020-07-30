const express = require('express');
const router = express.Router();
const createSurveyRouter = require('./createSurvey');
const { verifyToken } = require('./tokenAuth');

router.get('/', verifyToken, createSurveyRouter);

module.exports = router;
