// let username = document.getElementsByName("username");
// let fname = document.getElementByName("fname");
// let lname = document.getElementByName("username");
// let mob1 = document.getElementByName("mobile1");
// let mob2 = document.getElementByName("mobile2");
// let email = document.getElementByName("email");
// let pswd = document.getElementByName("pswd");
// let dob = document.getElementByName("dob");
// let gender = document.getElementByName("gender");
// var date = new Date();
// let age = date.getFullYear() - dob.getFullYear();

// let person = {
//   username: username,
//   fname: fname,
//   lname: lname,
//   mob1: mob1,
//   mob2: mob2,
//   email: email,
//   password: pswd,
//   dob: dob,
//   age: age,
//   gender: gender,
// };
// console.log(person);

var sql = require("mysql2");
var con = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "social",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    'insert into generalUser(userID, fname, lname, gender, email, pswd,dateofbirth) values("stymgupta4","Satyam","Gupta", "male","202032170@iiitv.ac.in", "wont tell","2017-06-15")';
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
