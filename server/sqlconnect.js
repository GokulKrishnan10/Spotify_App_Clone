const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost:2000",
  user: "root",
  password: "",
  database: "playlist",
});
connection.connect();
connection.query("select * from playlists", (error, rows, fields) => {
  console.log(rows + " and " + fields);
});
connection.end();
