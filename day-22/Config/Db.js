const mysql = require("mysql2");

const con = mysql.createConnection({
      host:"localhost",
      user:"root",
      password:"",
      database:"test"
      
    });

    con.connect(function(err) {
      if (err) throw err;
      else {
        console.log("connected successfully...");
      }
    });

   module.exports=con;