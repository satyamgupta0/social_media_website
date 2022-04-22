const con = require("./dbcon");
const express = require('express');
const router=express.Router();


router.post("/reg",(req,res)=>{
  let username = req.body.username;
let fname = req.body.fname;
let lname = req.body.username;
let mob1 = req.body.mobile1;
let mob2 = req.body.mobile2;
let email = req.body.email;
let pswd = req.body.pswd;
// let dob = req.body.dob;
let gender = req.body.gender;
// var date = new Date();
// let age = date.getFullYear() - dob.getFullYear();

let person = {
  username: username,
  fname: fname,
  lname: lname,
  mob1: mob1,
  mob2: mob2,
  email: email,
  password: pswd,
  // dob: dob,
  // age: age,
  gender: gender,
};
console.log(person);
res.send(person);
})

module.exports=router;

// var sql =
//   'insert into generalUser(userID, fname, lname, gender, email, pswd,dateofbirth) values("stymguupta4","Satyam","Gupta", "male","2021052170@iiitv.ac.in", "wont tell","2017-06-15")';
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("1 record inserted");
// });

