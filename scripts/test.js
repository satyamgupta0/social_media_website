const con = require("./dbcon");
const express = require("express");
const router = express.Router();


router.get("/test", (req, res) => { 
    //     let user=req.cookies.user;

    // res.write(user);
    res.write("Hello From the test.js")
    res.write(req.cookies.user.user);
    res.send();

});
module.exports = router;