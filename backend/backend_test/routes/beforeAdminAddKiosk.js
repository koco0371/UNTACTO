/beforeAdminAddKiosk.js*/
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const adminAddKioskRouter = require('./adminAddKiosk');
const {	verifyTokenAdmin	} = require('./tokenAuth');

router.use(cookieParser());
router.post('/',verifyTokenAdmin, adminAddKioskRouter);
module.exports = router;
