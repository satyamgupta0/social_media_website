const con = require("./dbcon");
const express = require("express");
const { append } = require("express/lib/response");

let Posts;
let Friends;
let id;
let name;

const router = express.Router();

router.get("/profile", (req, res) => {
    let username = req.cookies.user.user;
    id = username;
    name = username;
    let query1 =   
      "SELECT COUNT(*) AS Posts FROM posts WHERE uploaderID = '" + username + "'";
    let query2 =   
      "SELECT COUNT(*) AS Friends FROM friendships WHERE userID = '" + username + "'";
    let query3 =   
      "SELECT * FROM posts NATURAL JOIN reaction WHERE uploaderID = '" + username + "'";

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
        if (result && result.length > 0) 
        res.render('profile',{data:result,posts:Posts,friends:Friends,Username:id,Name:name})
      });

  });

  module.exports = router;