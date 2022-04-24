const user=require('./login');
const con = require("./dbcon");
const express = require("express");
const router = express.Router();

router.post('/home',(req,res)=>{
let userId='user12';



    res.render("home",{
        person:user,//here

    })
})