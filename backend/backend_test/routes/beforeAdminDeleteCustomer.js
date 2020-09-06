/beforeAdminDeleteCustomer.js*/
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const adminDeleteCustomerRouter = require('./adminDeleteCustomer');
const {	verifyTokenAdmin	} = require('./tokenAuth');

router.use(cookieParser());
router.delete('/',verifyTokenAdmin, adminDeleteCustomerRouter);
module.exports = router;
