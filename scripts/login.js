const con = require("./dbcon");
const express = require("express");
const router = express.Router();
let person;

router.post("/login", (req, res) => {
  let user = req.body.user;  
  let pswd =req.body.pswd;
  let query =
    "SELECT G.*,M.* FROM generalUser G natural join mobilenumbers M WHERE (G.email = '" + user + "' or G.userID = '" + user + "') and G.pswd = '" + pswd + "'";
    let res11='';

  con.query(query, function (err, result, fields) {
    if (err) throw err;
    if (result != null) res11="Logged in successfully.";
    else res11="Username or Password are not correct.";
    res.send(res11); 
    
    person = {
      user: result[0]['userID'],
      fname: result[0]['fname'],
      lname: result[0]['lname'],
      email: result[0]['email'],
      mob1: result[0]['mobilenumber1'],
      mob2: result[0]['mobilenumber2'],
      password: pswd,
      dob: result[0]['dateOfBirth'],
      age: result[0]['age'],
      gender: result[0]['gender'],
    }
  });
});

module.exports = router;

// define (function(require)
// {
//     var mysql = require('mysql2');
// });

// //validate username and password
// function create_account()
// {
//     var username=document.getElementById("username").value;
//     var password=document.getElementById("password").value;
//     //other validations required code
//     if(username==''||password==''){
//     alert("Enter each details correctly");
//     }
//     else
//     {
//         var con = mysql.createConnection({
//             host: "localhost",
//             port: '3306',
//             user: "root",
//             password: "password",
//             database: "social"
//           });

//           con.connect(function(err) {
//             if (err) throw err;
//             let query = "SELECT fname,pswd FROM generaluser WHERE fname = '"+username+"' and pswd = '"+password+"'";
//             con.query(query, function (err, result, fields) {
//               if (err) throw err;
//               if (result != null)
//               alert("Logged in successfully.");
//               else
//               alert("Username or Password are not correct.");
//               process.exit(0)
//             });
//           });
//     }
// }
