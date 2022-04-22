const con = require("./dbcon");
const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  let user = req.body.user;  
  let pswd =req.body.pswd;
  let query =
    "SELECT * FROM generalUser WHERE email = '" +
    user +
    "' and pswd = '" +
    pswd +
    "'";
    let res11='';
    
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    if (result != null) res11="Logged in successfully.";
    else res11="Username or Password are not correct.";
    res.send(res11);
    process.exit(0);
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
