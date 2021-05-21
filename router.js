const express = require("express");
const { query } = require("./databaseConnection");
const mysqlConnection = require("./databaseConnection");
const router = express.Router()

router.use(express.static('public')); 

router.get("/show_services",(req, res)=>{
    res.render("services")

})
router.get("/show_errpage",(req, res)=>{
    res.render("errpage")
})
router.post("/add_partner",(req, res) =>{
    let rep_title = req.body.rep_title;
    let rep_name =  req.body.rep_name;
    let rep_contact = req.body.rep_number;
    let com_name = req.body.com_name;
    let com_email = req.body.com_email;
    let hq_location = req.body.hq_location;
    let com_number  = req.body.com_number;
    let reg_number = req.body.reg_number;
    let com_service = req.body.com_service;
    let com_password = req.body.com_password;
    let com_password2 = req.body.com_password2;
    if (com_password === com_password2){
  let query = "INSERT INTO afrotour.partner(`com_name`,`com_reg_number`,`com_email`,`hq_location`,`com_phone`,`services`,`rep_name`,`rep_position`,`rep_contact`,`password`) VALUES(?,?,?,?,?,?,?,?,?,?)"  
  mysqlConnection.query(query,[com_name,reg_number,com_email,hq_location,com_number,com_service,rep_name,rep_title,rep_contact,com_password], (err,rows, fields) =>{
    if(!err){
        res.redirect("/route/show_services")
    }
    else{
        console.error(err)
        res.redirect("/route/show_errpage")
    }   
    }); 
    }
    else{
        res.render("index",{"password_match" :false})
    }
})
router.post("/add_partner",(req,res) =>{
    // INSERT REG DETAILS
    let first_name = req.body.first_name;
    let last_name =  req.body.last_name;
    let user_email = req.body.user_email;
    let user_address = req.body.com_name;
    let user_number = req.body.user_number;
    let user_sex = req.body.user_sex;
    let user_dob = req.body.user_dob;
    let next_of_kin = req.body.reg_number;
    let tourist_password = req.body.tourist_password;
    let tourist_password2 = req.body.tourist_password2;
    
    let query
})

module.exports=router;