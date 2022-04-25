const con = require("./dbcon");
const express = require("express");
const { append } = require("express/lib/response");

const router = express.Router();

router.get("/chat", (req, res) => {
    let username = '12489';
    id = username;
    let query1 =   
      "SELECT * FROM chat WHERE fromuser = '" + username + "'" + " OR touser = '" + username + "'";

    con.query(query1, function (err, result, fields) {
        if (err) throw err;
        if (result && result.length > 0) 
        res.render('chat',{chatlist:result})
      });

  });

  module.exports = router;