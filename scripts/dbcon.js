const mysql= require("mysql2");
const express=require("express");

var app=express();
var mysqlConnection=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "social",
  });
  
  mysqlConnection.connect((err)=>{
      if (!err) {
          console.log("Connected");
      } else {
          console.log("Connection Failed");
      }
  });
  module.exports=mysqlConnection;
  