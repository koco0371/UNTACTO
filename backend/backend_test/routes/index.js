const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>res.json({username:'bryan~~~'}));
router.get('/group', (req, res)=>res.json({username:'dev group. bryan'}));

module.exports = router;
