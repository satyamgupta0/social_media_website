const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
// app.use(express.static(__dirname+'public/style'));
// app.use(express.static(__dirname+'public/images'));

// console.log(path.join(__dirname,"views/signup.html"));
// /home/satyam/social/social_media_website/pubilc
 
app.use(require('./scripts/signup'));
app.use(require('./scripts/login'));

app.get("/", (req, res)=>{ 
    let indexPath = path.join(__dirname,"views/login.html")
    res.sendFile(indexPath)
});

app.get("/signup", (req, res)=>{
    indexPath = path.join(__dirname,"views/signup.html")
    res.sendFile(indexPath)
});

app.get("/home", (req, res)=>{
    indexPath = path.join(__dirname,"views/home.html")
    res.sendFile(indexPath)
});
app.get("/upload", (req, res)=>{
    indexPath = path.join(__dirname,"views/upload.html")
    res.sendFile(indexPath)
});

app.get("/profile", (req, res)=>{
    indexPath = path.join(__dirname,"views/profile.html")
    res.sendFile(indexPath)
});
app.get("/welcome", (req, res)=>{
    indexPath = path.join(__dirname,"views/welcome.html")
    res.sendFile(indexPath)
});


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
