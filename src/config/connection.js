var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sss@1502",
  database: "combineall_table"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports=con;