const login = require("./login");
const con = require("./dbcon");
const express = require("express");
const router = express.Router();
const path = require("path");

/* How friend requests are being held 

-- Current user is sending a friendrequest--
if I am the current application user then I will be a;
and the other person will be b;
active state = 1;
pending state= 0;

You sent a friend request to user with userid y
the value stored in the database will be pending_y


the pending state scheme will be frndstatus=pending_ab
so if I(a) send a friendrequest to another person(b) then 
and entry in the friendships table will be frndstatus='pending10'
i.e. I accepted the friendships and other has not accepted yet.
*/



//Original route;; with html
router.get("/suggestions", (req, res) => {
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

router.get('/accept',(req,res)=>{
  let person = req.cookies.user;
  let friendID='12312';
  let sql='update friendships set frndstatus="active" where (userid ="'+person.userID+'" and friendId="'+friendID+'") or (friendId ="'+person.userID+'" and userId="'+friendID+'")';
  console.log(sql);
  con.query(sql, (err, result) => {
    if (err) throw err;
    else {            
      res.redirect('/request');      
    }
  }); 
});


//route to send a friendRequest
router.get('/sendFriendRequest',(req,res)=>{
  let person = req.cookies.user;
  let friendID='12312';
  let sql='update friendships set frndstatus="pending_'+friendID+'" where (userid ="'+person.userID+'" and friendId="'+friendID+'") or (friendId ="'+person.userID+'" and userId="'+friendID+'")';
  console.log(sql);
  con.query(sql, (err, result) => {
    if (err) throw err;
    else {            
      res.redirect('/suggestions');      
    }
  }); 
});


// Route to show the all incoming friendrequests
router.get('/request',(req,res)=>{
  let person = req.cookies.user;
  let sql="select * from friendlist where userid in "+
  "((select friendId from friendships where userID='"+person.userID+"'  and frndstatus = 'pending_"+person.userID+"' )"+ 
  "union  (select userid from friendships where friendId='"+person.userID+"'  and frndstatus = 'pending_"+person.userID+"') )";
  con.query(sql, (err, result, field) => {
    if (err) throw err;
    if (result && result.length >= 0) {
      res.render("request",{pendingFriends:result});
    }    
  });   
});



module.exports = router;