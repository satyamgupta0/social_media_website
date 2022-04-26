const login = require("./login");
const con = require("./dbcon");
const express = require("express");
const router = express.Router();
const path = require("path");

//Original route;; with html
router.get("/home", (req, res) => {
  let person = {
    user: "user1",
    fname: "fname1",
    lname: "lname1",
    email: "user1@gmail.com",
    mob1: "9489867715",
    mob2: "8622272161",
    password: "password",
    dob: "2022-04-13T18:30:00.000Z",
    age: 23,
    gender: "Male",
  };
  // Mutual Friends Query
  let query1 =
    "select distinct userID as friends from friendships where friendId in ( select friendID from friendships where userID='"+person.user+"');";

  let query2 = 
    "SELECT * FROM posts NATURAL JOIN reaction WHERE uploaderID IN ( select friendId from friendships where userID = " + 12489 + ")";

    let f='';
  con.query(query1, (err, results, field) => {
    if (err) throw err;
    if (results && results.length > 0) {
      //    list.
      console.log(results);
      f=results;
    }    
  });

  con.query(query2, (err, result, field) => {
    if (err) throw err;
    if (result && result.length > 0) {
      console.log(f);
      res.render("home",{Posts:result});
    }    
  });

  // let person= login.person;
    // indexPath = "/home/satyam/social/social_media_website/views/home.html";
    // console.log(indexPath);
    // console.log(person);
    // res.render("home");
});

// router.post('/home',(req,res)=>{
// let person= user.person;
// console.log(person);

// //Mutual Friends here
// let list={};
// let sql = "select distinct userID as friends from friendships where friendId in ( select friendID from friendships where userID='user11');"
// con.query(sql,(err,results,field)=>{
//    if(err) throw err;
//    if(results && results.length>0){
//     //    list.
// console.log(results);
//    }

// })
//     // res.render("home",{
//     //     person:user,//here

//     // })
// })

module.exports = router;
