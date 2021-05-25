const express = require('express');
const app = express();
const upload = require('express-fileupload');
const path = require("path")
const bordyParser = require("body-parser")
const router = require("./router");
const session = require("express-session")
const testData = require("./testData.json")
const mysqlConnection = require('./databaseConnection');

// Use functions
app.use(express.static('public')); 
app.use("/css",express.static(__dirname+"public/css"))
app.use("/js",express.static(__dirname+"public/js"))
app.use("/img",express.static(__dirname+"public/img"))
app.use("/fonts",express.static(__dirname+"public/fonts"))
app.use(upload());    
app.use(express.json({limit: '5mb'}));
app.use(session({
    secret: "XwPp9xazJ0ku5CZnlmgAx2Dld8SHkAeT",
    cookie: {maxAge:6000},
    resave: false,
    saveUninitialized:false
}))
const urlenCoded = bordyParser.urlencoded({extended: true})
app.use(bordyParser.json());


// :::::::::::::: END USE FUNCTIONS ::::::::::::::::

//Set html view engine
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.set('view options',{layout :false});
//::::: end view code ::::::::::

app.use(express.Router())
app.use('/route',router)
// Connect to DB
function handleDisconnect(func){
    mysqlConnection.getConnection(function(err){
        if(err){
            console.log("db_error" + err)
            setTimeout(handleDisconnect(insertQuery()),2000)
        }
        else if (!err){
            console.log("db connection successful")
            func()
        }
        mysqlConnection.on("error",function(err){
            console.log(err)
            if(err.code === "PROTOCOL_CONNECTION_LOST"){
                handleDisconnect()
            }
            else{
                throw err;
            }
        })
    })
}

// Listen on port 
const port = process.env.PORT || 4000
app.listen(port, () => console.log('listening at  http://localhost:4000'));

//Routes
app.get("/",(req,res) =>{
     data = {
        "password_match":true,
        length:parseInt(testData.length),
        results:testData
    }
    res.render("index", data)
})
app.get("/register/", (req,res) =>{
    let data = {
        password_match : true
    }
    res.render("register",data)
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
app.get("/leading_page/:id/show", (req,res) =>{
    let id = req.params.id;
    let places = []
    testData.forEach((item) =>{
        if(item.id === id){
            places.push(item)    
        }
    }) 
    res.render("attraction_main",{location:places})
})

app.post("/add_user",urlenCoded,(req,res) =>{
    // INSERT REG DETAILS
    let first_name = req.body.first_name;
    let last_name =  req.body.last_name;
    let user_email = req.body.user_email;
    let user_address = req.body.user_address;
    let user_number = req.body.user_number;
    let user_sex = req.body.user_sex;
    let user_dob = req.body.user_dob;
    let tourist_password = req.body.tourist_password;
    let tourist_password2 = req.body.tourist_password2;

    if (tourist_password === tourist_password2){
        //INSERT INTO DB AND REDIRECT WITH GOODNEWS MSG
        let insertQuery = function(){
            let query = "INSERT INTO registered_tourists(`forenames`,`last_name`,`date_of_birth`,`sex`,`email`,`contact_number`,`address`,`image`) VALUES(?,?,?,?,?,?,?,?)";
            mysqlConnection.query(query,[first_name,last_name,user_dob,user_sex,user_email,user_number,user_address, process.env.IMAGE],(err,rows,fields) =>{
                if(err){
                     console.log(err)
                }
                else{
                   res.redirect("/")
                }
            })
        }
        handleDisconnect(insertQuery)
        }
    else{
        let data =  {
           password_match : false
        }
        res.render("register", {data, values})
    }
})