const con = require("./dbcon");
const express = require("express");
const { append } = require("express/lib/response");

const router = express.Router();


router.get("/chat", (req, res) => {
  let username = req.cookies.user.userID;     //username is id
    let query1 =   
      "SELECT * FROM chat WHERE fromuser = '" + username + "'" + " OR touser = '" + username + "'";

    con.query(query1, function (err, result, fields) {
        if (err) throw err;
        if (result && result.length > 0) 
        res.render('chat',{chatlist:result,Username:username})
      });

  });

  module.exports = router;