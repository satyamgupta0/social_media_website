const con = require("./dbcon");
const express = require("express");
const router = express.Router();

router.get("/like", (req, res) => {
 let query =
 "UPDATE reaction SET likes = likes + 1";

 con.query(query3, function (err, result, fields) {
    if (err) throw err;
    if (result && result.length > 0) 
    res.redirect('profile')
  });

});
module.exports = router;