const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
 
app.get("/", (req, res)=>{ 
    let indexPath = path.join(__dirname,"../html/login.html")
    res.sendFile(indexPath)
});

app.get("/signup", (req, res)=>{
    indexPath = path.join(__dirname,"../html/signup.html")
    res.sendFile(indexPath)
});

app.get("/home", (req, res)=>{
    res.send("Home Page")
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
