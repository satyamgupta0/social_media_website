const con = require("./dbcon");
const express = require("express");
const { append } = require("express/lib/response");

let Posts = 0;
let Friends = 0;
let id;
let name;

const router = express.Router();

router.get("/profile", (req, res) => {

    let person = req.cookies.user;
    id = person.userID;
    name = person.fname + " " + person.lname;

    let query1 =   
      "SELECT COUNT(*) AS Posts FROM posts WHERE uploaderID = '" + person.userID + "'";
    let query2 =   
      "SELECT COUNT(*) AS Friends FROM friendships WHERE userID = '" + person.userID + "'";
    let query3 =   
      "SELECT * FROM posts natural JOIN reaction where uploaderID = '" + person.userID + "'";

    con.query(query1, function (err, result, fields) {
      if (err) throw err;
      if (result && result.length > 0) 
      Posts = result[0]['Posts']
    });

    con.query(query2, function (err, result, fields) {
        if (err) throw err;
        if (result && result.length > 0) 
        Friends = result[0]['Friends']
      });

    con.query(query3, function (err, result, fields) {
        if (err) throw err;
        if (result && result.length >= 0) 

        res.render('profile',{data:result,posts:Posts,friends:Friends,Username:id,Name:name})
      });

  });

  //list the friends of a user
  router.get("/friendlist",(req,res)=>{
    let friendlist=req.cookies.friendlist;
// console.log(friendlist);
    res.render('friendlist',{friendlist:friendlist});
  });

// give the details of friend
  router.post("/friendprofile",(req,res)=>{
    let id=req.body.friendID;    
    let name = req.body.friendName;
    // console.log(id,name);

    let query1 =   
      "SELECT COUNT(*) AS Posts FROM posts WHERE uploaderID = '" + id + "'";
      // console.log("query1",query1);
    let query2 =   
      "SELECT COUNT(*) AS Friends FROM friendships WHERE userID = '" + id + "'";
      // console.log("query2",query2);
    let query3 =   
      "SELECT * FROM posts natural JOIN reaction where uploaderID = '" + id + "'";
      // console.log("query3",query3);

    con.query(query1, function (err, result, fields) {
      if (err) throw err;
      if (result && result.length >= 0) 
      // console.log("posts number ",result),
      Posts = result[0]['Posts']
    });

    con.query(query2, function (err, result, fields) {
        if (err) throw err;
        if (result && result.length >= 0) 
        // console.log("friends number ",result);
        Friends = result[0]['Friends']
      });

    con.query(query3, function (err, result, fields) {
        if (err) throw err;
        if (result && result.length >= 0)
        // console.log("posts ",result),

        res.render('friendprofile',{data:result,posts:Posts,friends:Friends,Username:id,Name:name})
      });

  })
  module.exports = router;