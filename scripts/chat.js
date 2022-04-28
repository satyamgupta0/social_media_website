const con = require("./dbcon");
const express = require("express");
const { append } = require("express/lib/response");

const router = express.Router();


router.get("/chat", (req, res) => {

    let person = req.cookies.user;
    id = person.userID;
    

    let query1 =   
      "SELECT * FROM chat WHERE fromuser = '" + person.userID + "'" + " OR touser = '" + person.userID + "'";

    con.query(query1, function (err, result, fields) {
        if (err) throw err;

        if (result && result.length >= 0) 
        res.render('chat',{chatlist:result,Username:id})

      });

  });

  module.exports = router;