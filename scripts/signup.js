const con = require("./dbcon");
const express = require("express");
const router = express.Router();
let person;

router.post("/reg", (req, res) => {
  let username = req.body.username;
  let fname = req.body.fname;
  let lname = req.body.username;
  let mob1 = req.body.mobile1;
  let mob2 = req.body.mobile2;
  let email = req.body.email;
  let pswd = req.body.password;
  let dob = new Date(req.body.dob);
  let gender = req.body.gender;
  var date = new Date();
  // console.log(dob);
  let age = date.getFullYear() - dob.getFullYear();

  person = {
    username: username,
    fname: fname,
    lname: lname,
    mob1: mob1,
    mob2: mob2,
    email: email,
    password: pswd,
    dob: dob,
    age: age,
    gender: gender,
  };
  console.log(person);
  console.log(dob.toISOString().split('T')[0]);

  var sql =
    'insert into generalUser(userID, fname, lname, gender, email, pswd,dateofbirth,age)'+
    ' values("'+username+'","'+fname+'","'+lname+'", "'+gender+'","'+email+'", "'+pswd+'","'+dob.toISOString().split('T')[0]+' "'+age+'")';
  con.query(sql, (err, result) => {
    if (err) throw err;
    else {      
      res.redirect('/welcome');      
    }
  });
  // res.send(person);
  // res.send()
});

module.exports = router;
// module.exports=person;
