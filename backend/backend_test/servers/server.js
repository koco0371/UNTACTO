const express = require('express');
const path = require('path');
const os = require('os');

const app = express();
//const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3002;
const route = require('../routes/index');
const showAllDataRouter = require('../routes/show-all-data');
const signUpRouter = require('../routes/signUp');
const loginRouter = require('../routes/login');
//app.use(cors());

app.use(bodyParser.json());
app.use('/api', route); // app.use('/api', (req, res)=> res.json({username:'bryan'}));
app.use('/show-all-data', showAllDataRouter);
app.use('/api/auth/signup', signUpRouter);
app.use('/api/auth/login', loginRouter);

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})
