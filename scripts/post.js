const con = require("./dbcon");
const express = require("express");
const router = express.Router();

router.get("/post", (req, res) => {
 const userid=req.cookies.user.userID;
 const imageurl=req.body.
    res.render('home');

});
module.exports = router;