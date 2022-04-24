const con = require("./dbcon");
const express = require("express");
const { append } = require("express/lib/response");

let Posts;
let Friends;
let id;

const router = express.Router();

router.get("/profile", (req, res) => {
    let username = 'user1';
    id = username;
    let query1 =   
      "SELECT COUNT(*) AS Posts FROM posts WHERE uploaderID = '" + username + "'";
    let query2 =   
      "SELECT COUNT(*) AS Friends FROM friendships WHERE userID = '" + username + "'";
      
    con.query(query1, function (err, result, fields) {
      if (err) throw err;
      if (result && result.length > 0) 
      Friends = result[0]['Posts']
    });

    con.query(query2, function (err, result, fields) {
        if (err) throw err;
        if (result && result.length > 0) 
        Posts = result[0]['Friends']
      });

      res.render('profile',{posts:Posts,friends:Friends,Username:id});
  });

  module.exports = router;