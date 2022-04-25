const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs"); //for ejs rendering

app.use(express.static("public"));

// console.log(path.join(__dirname,"views/signup.html"));
// /home/satyam/social/social_media_website/pubilc

app.use(require("./scripts/signup"));
app.use(require("./scripts/login"));
app.use(require("./scripts/profile"));
app.use(require("./scripts/chat"));
// app.use(session({
//     secret: 'keyboardcat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
//   }))

app.get("/", (req, res) => {
  let indexPath = path.join(__dirname, "views/login.html");
  //   console.log(req.session);
  res.sendFile(indexPath);
});

app.get("/signup", (req, res) => {
  indexPath = path.join(__dirname, "views/signup.html");
  res.sendFile(indexPath);
});

app.get("/home", (req, res) => {
  indexPath = path.join(__dirname, "views/home.html");
  res.sendFile(indexPath);
});
app.get("/upload", (req, res) => {
  indexPath = path.join(__dirname, "views/upload.html");
  res.sendFile(indexPath);
});

app.get("/welcome", (req, res) => {
  indexPath = path.join(__dirname, "views/welcome.html");
  res.sendFile(indexPath);
});

// route for user logout
app.get("/logout", (req, res) => {
  //   if (req.session.user && req.cookies.user_sid) {
  //     res.clearCookie("user");
  res.redirect("/");
  //   }
});

// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => {
  console.log(`The application started successfully on port localhost:${port}`);
});
