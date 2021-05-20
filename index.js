const { request, response } = require('express');
const express = require('express');
const app = express();
const mysqlConnection = require('./databaseConnection');
const upload = require('express-fileupload');
const path = require("path")
const bordyParser = require("body-parser")
const router = require("./router");
const { dirname } = require('path');
const session = require("express-session")
const testData = require("./testData.json")
// Use functions
app.use(express.static('public')); 
app.use("/css",express.static(__dirname+"public/css"))
app.use("/js",express.static(__dirname+"public/js"))
app.use("/img",express.static(__dirname+"public/img"))
app.use("/fonts",express.static(__dirname+"public/fonts"))
app.use(bordyParser.urlencoded({extended: true}))
app.use(bordyParser.json());
app.use(upload());    
app.use(express.json({limit: '5mb'}));
app.use(session({
    secret: "XwPp9xazJ0ku5CZnlmgAx2Dld8SHkAeT",
    cookie: {maxAge:6000},
    resave: false,
    saveUninitialized:false
}))


//Set html view engine
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.set('view options',{layout :false});
//::::: end view code ::::::::::

app.use(express.Router())
app.use('/route',router)
// Connect to DB
/*mysqlConnection.connect((err) => {
    if(!err){
        console.log('connected');
    }else{
        console.log(err);
    }
});*/

// Listen on port 
const port = process.env.PORT || 4000
app.listen(port, () => console.log('listening at  http://localhost:4000'));

//Routes
app.get("",(req,res) =>{
    data= {
        "password_match":true,
        length:parseInt(testData.length),
        results:testData
    }
    res.render("index", data)
})
app.get("/fluid-promotions", (req,res) =>{
    let options = {
        root: path.join(__dirname)
    }
    fileName = "fluid-promotion.json"
    res.sendFile(fileName, options, function(err){
        if(!err){
            console.log("sent2")
            
        }
        else{
            console.log("error")
        }
    })
})
app.post("/leading_page/:id/show", (req,res) =>{
    let id = req.params.id;
    let results = { }
    testData.forEach((item) =>{
        if(item.id === id){
            results = item
        }
        
    })  
    console.log(results)
})
