const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.use(express.static("public"));
// app.use(express.static(__dirname+'public/style'));
// app.use(express.static(__dirname+'public/images'));

console.log(path.join(__dirname,"views/signup.html"));
// /home/satyam/social/social_media_website/pubilc
 
app.get("/", (req, res)=>{ 
    let indexPath = path.join(__dirname,"views/login.html")
    res.sendFile(indexPath)
});

app.get("/signup", (req, res)=>{
    indexPath = path.join(__dirname,"views/signup.html")
    res.sendFile(indexPath)
});

app.get("/home", (req, res)=>{
    res.send("Home Page")
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
