const login = require("./login");
const con = require("./dbcon");
const express = require("express");
const router = express.Router();
const path = require("path");

//Original route;; with html
router.get("/home", (req, res) => {
  let person = req.cookies.user;
  // Mutual Friends Query
  let query1 =
    "select distinct userID as friends from friendships where friendId in ( select friendID from friendships where userID='"+person.userID+"');";

  let query2 = 
  'SELECT * FROM posts NATURAL JOIN reaction WHERE uploaderID IN ( select friendId from friendships where userID = "'+person.userID+'")';

    let f='';
  con.query(query1, (err, results, field) => {
    if (err) throw err;
    if (results && results.length >= 0) {
      //    list.
      // console.log(results);
      f=results;
    }    
  });

  con.query(query2, (err, result, field) => {
    if (err) throw err;
    if (result && result.length >= 0) {
      res.render("home",{Posts:result});
    }    
  });  
});

router.get('/suggestions',(req,res)=>{
  let person = req.cookies.user;
    
  
})

module.exports = router;
