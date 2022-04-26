const con = require("./dbcon");
const express = require("express");
const router = express.Router();
// let postID=req.body
let postID = "post35";

router.post("/like", (req, res) => {
  let query =
    "UPDATE reaction SET likes = likes + 1 where postID = '" + postID + "'";

  con.query(query, function (err, result, fields) {
    if (err) throw err;
    else {
      console.log("Liked the post");
      res.redirect("/profile");
    }
  });
});
module.exports = router;
