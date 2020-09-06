/beforeAdminListUser.js*/
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const adminListUserRouter = require('./adminListUser');
const {	verifyTokenAdmin	} = require('./tokenAuth');

router.use(cookieParser());
router.get('/',verifyTokenAdmin, adminListUserRouter);
module.exports = router;
