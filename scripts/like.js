const con = require("./dbcon");
const express = require("express");
const router = express.Router();
// let postID=req.body
let postID = "post35";

router.post("/like", (req, res) => {
  let query1 =
    "UPDATE reaction SET likes = likes + 1 where postID = '" + postID + "'";

  con.query(query1, function (err, result, fields) {
    if (err) throw err;
    if (result && result.length > 0) 
    res.redirect('/profile')
  });
});
module.exports = router;
