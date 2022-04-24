const con = require("./dbcon");
const express = require("express");

const router = express.Router();

router.post("/profile", (req, res) => {
    let username = req.body.username;
    let query1 =   
      "SELECT COUNT(*) AS Posts FROM posts WHERE uploaderID = '" + username + "'";
    let query2 =   
      "SELECT COUNT(*) AS Friends FROM friendships WHERE userID = '" + username + "'";

    con.query(query1, function (err, result, fields) {
      if (err) throw err;
      if (result && result.length > 0) 
      document.getElementById("Posts").innerHTML = "Posts : "+result[0]["Posts"]
      else
      console.log("Nahi");
    });

    con.query(query2, function (err, result, fields) {
        if (err) throw err;
        if (result && result.length > 0) 
        document.getElementById("Friends").innerHTML = "Friends : "+result[0]["Friends"];
      });
  });
  
  module.exports = router;