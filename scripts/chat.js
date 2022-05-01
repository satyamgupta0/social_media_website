const con = require("./dbcon");
const express = require("express");
const { append } = require("express/lib/response");

const router = express.Router();

router.get("/chat", (req, res) => {
  let person = req.cookies.user;
  id = person.userID;
  let friendID = req.cookies.activeFriend;

  

  let query1 =
    "SELECT * FROM chat WHERE (fromuser ='" +
    id +
    "' and touser ='" +
    friendID +
    "') or (fromuser ='" +
    friendID +
    "' and toUser ='" +
    id +
    "') ORDER BY tmstp";

  // console.log(query1);
  con.query(query1, function (err, result, fields) {
    if (err) throw err;
    if (result && result.length >= 0) {
      // console.log(result);
      let friendlist = req.cookies.friendlist;
      let friend=req.cookies.friend;//details of friend from the homepage-default 
      // and from the side friend-list using action (/tofriend) {find in the last of this page}
      res.render("chat", {
        chatlist: result,
        Username: id,
        friendlist: friendlist,
        friend:friend
      });
    }
  });
});

// insert the message into database
router.post("/message", (req, res) => {
  var message = req.body.baat;
  let person = req.cookies.user;
  var friendID = req.cookies.activeFriend;
  // console.log(message);
  let sql =
    'insert into chat(message,fromUser,toUser) values("' +
    message +
    '","' +
    person.userID +
    '",' +
    friendID +
    ")";
  con.query(sql, (err, result) => {
    if (err) throw err;
    else {
      res.redirect("/chat");
    }
  });
});

// store the clicked friend in the friendlist to the cookies
router.post("/tofriend", (req, res) => {
 
  let friendID = req.body.friendID; //take the friendID from the left bar in the chatpage  
 
  let query4="select * from friendlist where userid='"+friendID+"'";
  con.query(query4, function (err, result, fields) {
    if (err) throw err;
    if (result && result.length >= 0) 
    {   
    let person = {
      userID: result[0]['userid'],
      fullname: result[0]['fullname'],
      email: result[0]['email'],      
      gender: result[0]['gender'],
      image: result[0]['image']
    };
    //  console.log(person);
    res.cookie('friend',person);//storing friend details into cookies
    res.cookie("activeFriend", friendID);
    res.redirect("/chat");
  }});  
  
});

module.exports = router;
