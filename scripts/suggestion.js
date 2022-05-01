const login = require("./login");
const con = require("./dbcon");
const express = require("express");
const router = express.Router();
const path = require("path");

//Original route;; with html
router.get("/suggestion", (req, res) => {
  let person = req.cookies.user;

  let query = 
  'SELECT DISTINCT F.friendId AS Friends, G.fname, G.lname, G.image FROM friendships F INNER JOIN generaluser G ' +
  'ON F.friendID = G.userID ' + 
  'WHERE F.userID IN ' +
  '(SELECT friendId FROM friendships WHERE userID = '+ person.userID + ') '+
  'and F.friendID NOT IN ' +
  '(SELECT friendId FROM friendships WHERE userID = '+ person.userID + ') ' +
  'and F.friendID <> 12489';
    //execute the posts query and render the page
  con.query(query, (err, result, field) => {
    if (err) throw err;
    if (result && result.length >= 0) {
      res.render("suggestion",{Mutual_Friends:result});
    }    
  });  
});

// router.get('/suggestions',(req,res)=>{
//   let person = req.cookies.user;



//   res.redirect("/home");
    
  
  
// })

module.exports = router;