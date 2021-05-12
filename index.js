const { request, response } = require('express');
const express = require('express');
const app = express();
const mysqlConnection = require('./databaseConnection');
const upload = require('express-fileupload');
const data = require("./testData")
// Use functions
app.use(express.static('public')); 
app.use(upload());    
app.use(express.json({limit: '5mb'}));

/*mysqlConnection.connect((err) => {
    if(!err){
        console.log('connected');
    }else{
        throw err;
    }
});*/

// Listen on port 
const port = process.env.PORT || 4000
app.listen(port, () => console.log('listening at  http://localhost:4000'));


app.post('/register_tourist', (request, response) => {
    // mysqlConnection.query('select * from products', (err, rows, fields) => {
    //     if(!err){
    //         //console.log(rows);
    //         var data = rows; 
    //         response.json(data);
    //     }else{
    //         throw err;
    //     }
    // })
    console.log(request.body)
    response.json(data);
});

app.post('/register_patner', (request, response) => {
    // mysqlConnection.query('select * from products', (err, rows, fields) => {
    //     if(!err){
    //         //console.log(rows);
    //         var data = rows; 
    //         response.json(data);
    //     }else{
    //         throw err;
    //     }
    // })
    console.log(request.body)
    response.json(data);
});