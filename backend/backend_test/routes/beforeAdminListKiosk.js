/beforeAdminListKiosk.js*/
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const adminListKioskRouter = require('./adminListKiosk');
const {	verifyTokenAdmin	} = require('./tokenAuth');

router.use(cookieParser());
router.get('/',verifyTokenAdmin, adminListKioskRouter);
module.exports = router;
