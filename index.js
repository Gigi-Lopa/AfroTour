const { request, response } = require('express');
const express = require('express');
const app = express();
const mysqlConnection = require('./databaseConnection');
const upload = require('express-fileupload');

// Use functions
app.use(express.static('public'));
app.use(upload());    
app.use(express.json({limit: '5mb'}));

mysqlConnection.connect((err) => {
    if(!err){
        console.log('connected');
    }else{
        throw err;
    }
});

// Listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening at  3000'));
