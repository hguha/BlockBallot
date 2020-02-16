var mysql = require("mysql");
var fs = require("fs");
var path = require("path");

const connection = mysql.createConnection({
    host: "",
    user: "bernie",
    password: "",
    database: "userdb",
    ssl: {
        ca: fs.readFileSync(path.join(__dirname, "../ssl/electwise.pem"))
    }
});

exports.connection = connection;