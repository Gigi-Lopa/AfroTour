const mysql = require('mysql');
require('dotenv').config();

var host = process.env.HOST 
var user = process.env.USER 
var password = process.env.PASSWORD 
var database = process.env.DB 

var mysqlConnection = mysql.createConnection({
    host,
    user,
    password,
    database,
    multipleStatements: true
});



module.exports = mysqlConnection;