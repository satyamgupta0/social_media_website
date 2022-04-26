const con = require("./dbcon");
const express = require("express");
const router = express.Router();


router.get("/test", (req, res) => { 
        let person=req.cookies.user;

    // res.write(user);
    res.write("Hello From the test.js")
    res.write(person.user);
    console.log(person);
    res.send();

});
module.exports = router;