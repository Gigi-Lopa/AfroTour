const mysql = require('mysql');
require('dotenv').config();

var host = process.env.MYSQL_ADDON_HOST 
var user = process.env.MYSQL_ADDON_USER 
var password = process.env.MYSQL_ADDON_PASSWORD 
var database = process.env.MYSQL_ADDON_DB 

var mysqlConnection = mysql.createConnection({
    host,
    user,
    password,
    database,
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if(!err){
        console.log('connected');
    }else{
        throw err;
    }
});

module.exports = mysqlConnection;