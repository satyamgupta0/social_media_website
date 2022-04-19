const express = require("express");
const app = express();
const port = 3000;
 
app.get("/", (req, res)=>{ 
    res.sendFile("F:\DBMS Project\src\html\login.html")
});

app.get("/signup", (req, res)=>{
    res.sendFile(".\src\html\signup.html")
});

app.post("/home", (req, res)=>{
    res.send("Home Page");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
