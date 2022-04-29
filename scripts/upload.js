const con = require("./dbcon");
const express = require("express");
var formidable = require('formidable');
var fs = require('fs');

const router = express.Router();

router.post("/upload", (req, res) => {
  var form = new formidable.IncomingForm();
    let imageFile = req.body.Post;
    let caption = req.body.mycaption;
    form.on('file', function (name, file){
      console.log('Uploaded ' + file.name);
  });
    console.log(imageFile);
    console.log(caption);
    });

  module.exports = router;