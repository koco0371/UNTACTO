var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'admin',
    password: '####',
    database: '####'
});

module.exports = connection;
