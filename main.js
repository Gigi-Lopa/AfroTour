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
    host : "database-1.cztobvy32d6g.us-east-1.rds.amazonaws.com",
    user : "admin",
    password :"Afrotour",
    database : "Hello",
    multipleStatements: true,
    insecureAuth :true
})
mySqlConnection.connect((err)=>{
    if(!err)
    console.log("CONNECTION MADE!!")
    else
    console.log("CONNECTION ERROR : " + JSON.stringify(err, undefined, 2))
})
app.get("",(req, res) =>{
    mySqlConnection.query("SELECT * FROM Hello.users", (err, data, FIELDS) =>{
        if(!err){    
            if(data.length > 0){
            res.send(data)    
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

// PORT NUMBER 
const PORT = process.env.PORT || 7000
app.listen(PORT ,function(){console.log("app running on port http://localhost:"+PORT)})