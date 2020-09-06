/beforeAdminListCustomer.js*/
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const adminListCustomerRouter = require('./adminListCustomer');
const {	verifyTokenAdmin	} = require('./tokenAuth');

router.use(cookieParser());
router.get('/',verifyTokenAdmin, adminListCustomerRouter);
module.exports = router;
