const con = require("./dbcon");
const express = require("express");
const { append } = require("express/lib/response");

let Posts;
let Friends;
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
      "SELECT * FROM posts NATURAL JOIN reaction WHERE uploaderID = '" + person.userID + "'";

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

  module.exports = router;