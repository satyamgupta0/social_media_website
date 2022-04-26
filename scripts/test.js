const con = require("./dbcon");
const express = require("express");
const router = express.Router();


router.get("/test", (req, res) => { 
        let person=req.cookies.user;

    res.write(JSON.stringify(person));
    res.write("Hello From the test.js")
    res.write(person.userID);
    console.log(person);
    res.send();

});
module.exports = router;