import mysql from 'mysql'
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@Matkhau12345",
    database: "ducvan"
  });
  
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");

});
});