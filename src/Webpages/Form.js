document.getElementById("Login_Button").onclick = create_account();

define (function create_account(require)
{  
    var mysql = require('mysql2');
    var username=document.getElementById("username").value;  
    var password=document.getElementById("password").value;      
    //other validations required code  
    if(username==''||password==''){  
    alert("Enter each details correctly");  
    }    
    else
    { 
        var con = mysql.createConnection({
            host: "localhost",
            port: '3306',
            user: "root",
            password: "Abhay@mySQL#1234",
            database: "social"
          });
          
          con.connect(function(err) {
            if (err) throw err;
            let query = "SELECT fname,pswd FROM generaluser WHERE fname = '"+username+"' and pswd = '"+password+"'";
            con.query(query, function (err, result, fields) {
              if (err) throw err;
              if (result != null)
              alert("Logged in successfully.");
              else
              alert("Username or Password are not correct.");
              process.exit(0)
            });
          });
    }  
}  )