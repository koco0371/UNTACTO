var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'admin',
    password: 'a103',
    database: 'project1'
});

module.exports = connection;
