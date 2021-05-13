const { request, response } = require('express');
const express = require('express');
const app = express();
const mysqlConnection = require('./databaseConnection');
const upload = require('express-fileupload');
const dummyData = require("./testData.json")
const path = require("path")
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

app.get("/fluid-attraction", (req,res) =>{
    let options = {
        root: path.join(__dirname)
    }
    fileName = "testData.json"
    res.sendFile(fileName, options, function(err){
        if(!err){
            console.log("sent")
        }
        else{
            console.log("error")
        }
    })
})
app.post('/register_tourist', (request, response) => {
    
    // mysqlConnection.query(`insert into tourist (title,first_name,last_name,company,email,phone,password,password_veryfication) values (${request.body.title},${request.body.first_name},${request.body.last_name},${request.body.company},${request.body.email},${request.body.phone},${request.body.password},${request.body.password_veryfication})`, (err, rows, fields) => {
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
    
    // mysqlConnection.query(`insert into patner (title,first_name,last_name,company,email,phone,password,password_veryfication) values (${request.body.title},${request.body.first_name},${request.body.last_name},${request.body.company},${request.body.email},${request.body.phone},${request.body.password},${request.body.password_veryfication})`, (err, rows, fields) => {
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