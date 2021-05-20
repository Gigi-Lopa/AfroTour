const mysql = require('mysql');
require('dotenv').config();

var host = process.env.HOST_OG 
var user = process.env.USER_OG
var password = process.env.PASSWORD_OG 
var database = process.env.DB_OG

var mysqlConnection = mysql.createConnection({
    host,
    user,
    password,
    database,
    multipleStatements: true
});



module.exports = mysqlConnection;