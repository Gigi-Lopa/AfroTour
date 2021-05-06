const express = require("express")
const mysql = require("mysql")
const body_Parser = require("body-parser")
const session = require("express-session")

// Initialize app
let app = express();

// initialize body parser
app.use(body_Parser.urlencoded({extended: true}))
app.use(body_Parser.json());

// static files
app.use(express.static("public"));
app.use("/css",express.static(__dirname+"public/css"))
app.use("/js",express.static(__dirname+"public/js"))
app.use("/fonts",express.static(__dirname+"public/fonts"))
app.use("/img",express.static(__dirname+"public/img"))

//Set View Engine
app.set('views', './views');
app.set('view engine', 'ejs');
app.set('view options',{layout :false});

//Database Connection
const mySqlConnection = mysql.createConnection({
    host : "35.173.73.2",
    user : "user",
    password :"YourPassword",
    database : "iwaddatabase",
    multipleStatements: true,
    insecureAuth :true
})/*
mySqlConnection.connect((err)=>{
    if(!err)
    console.log("CONNECTION MADE!!")
    else
    console.log("CONNECTION ERROR : " + JSON.stringify(err, undefined, 2))
})
app.get("",(req, res) =>{
    mySqlConnection.query("SELECT * FROM iwaddatabase.users", (err, data, FIELDS) =>{
        if(!err){    
            if(data.length > 0){
            userLogin = true
            res.send("yes")    
    }
    else{
        res.send("Invalidinput")
    }
    }
    else{
        res.send(JSON.stringify(err, undefined, 2))
    }
    res.end();
})
})
*/
//Render HOME page
app.get("", (req,res) =>{
    res.render("index")
})

// PORT NUMBER 
const PORT = process.env.PORT || 7000
app.listen(PORT ,function(){console.log("app running on port http://localhost:"+PORT)})