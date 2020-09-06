const express = require('express');
const path = require('path');
const os = require('os');
const app = express();
const bodyParser = require('body-parser');
const port =process.env.PORT || 8080;
const cookieParser = require('cookie-parser');

const route = require('../routes/index');
const createSurveyRouter = require('../routes/beforeCreateSurvey');
const signUpRouter = require('../routes/signUp');
const loginRouter = require('../routes/login');
const logoutRouter = require('../routes/logout');
const checkRouter = require('../routes/check');
const detailRouter = require('../routes/beforeSurveyDetail');
const showSurveyListRouter = require('../routes/beforeShowSurveyList');
const dashboardAnswerRouter = require('../routes/beforeDashboardAnswer');
const surveyDetailAnswerRouter = require('../routes/beforeSurveyDetailAnswer');
const customerLoginRouter = require('../routes/customerLogin');
const customerLogoutRouter = require('../routes/customerLogout');
const customerCheckRouter = require('../routes/customerCheck');
const adminListUserRouter = require('../routes/beforeAdminListUser');
const adminListCustomerRouter = require('../routes/beforeAdminListCustomer');
const adminListKioskRouter = require('../routes/beforeAdminListKiosk');
const adminListSurveyRouter = require('../routes/beforeAdminListSurvey');
const adminAddKioskRouter = require('../routes/beforeAdminAddKiosk');
const adminReadSurveyRouter = require('../routes/beforeAdminReadSurvey');
const adminDeleteCustomerRouter = require('../routes/beforeAdminDeleteCustomer');
const adminDeleteSurveyRouter = require('../routes/beforeAdminDeleteSurvey');
const adminDeleteUserRouter = require('../routes/beforeAdminDeleteUser');
const downloadFileRouter = require('../routes/downloadFile');
const streamFileRouter = require('../routes/streamFile');

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/auth/signup', signUpRouter);
app.use('/api/auth/login', loginRouter);
app.use('/api/auth/logout', logoutRouter);
app.use('/api/auth/check', checkRouter);
app.use('/api/surveys',createSurveyRouter);
app.use('/api/customer/logout',customerLogoutRouter);
app.use('/api/customer/login',customerLoginRouter);
app.use('/api/customer/check',customerCheckRouter);
app.use('/api/admin/users',adminListUserRouter);
app.use('/api/admin/kiosks',adminListKioskRouter);
app.use('/api/admin/customers',adminListCustomerRouter);
app.use('/api/admin/kiosks',adminAddKioskRouter);
app.use('/api/download/:id',function(req,res,next){res.locals.id=req.params.id;next();},downloadFileRouter);
app.use('/api/stream/:id',function(req,res,next){res.locals.id=req.params.id;next();},streamFileRouter);
app.use('/api/admin/customers/:id',function(req,res,next){res.locals.id=req.params.id; next();},adminDeleteCustomerRouter);
app.use('/api/admin/customers/:id',function(req,res,next){res.locals.id=req.params.id; next();},adminDeleteCustomerRouter);
app.use('/api/admin/surveys?',function(req,res,next){res.locals.query = req.query; next();},adminListSurveyRouter);
app.use('/api/admin/surveys/addEventListener:surveyId',function(req,res,next){res.locals.surveyId=req.params.surveyId; next();},adminReadSurveyRouter);
app.use('/api/admin/surveys/:surveyId',function(req,res,next){res.locals.surveyId=req.params.surveyId; next();},adminDeleteSurveyRouter);
app.use('/api/admin/users/:id',function(req,res,next){res.locals.id=req.params.id; next();},adminDeleteUserRouter);
app.use('/api/surveys?',function(req,res,next){res.locals.query = req.query; next(); }, showSurveyListRouter);
app.use('/api/surveys/:id',function(req,res,next){res.locals.id=req.params.id; next();},detailRouter);
app.use('/api/answers/:id', function(req,res,next){res.locals.id=req.params.id; next();},surveyDetailAnswerRouter);
app.use('/api/answers?', function(req,res,next){res.locals.query = req.query; next();}, dashboardAnswerRouter);

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})
