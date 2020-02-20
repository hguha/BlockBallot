var mysql = require("mysql");
var fs = require("fs");
var path = require("path");
var USER = require("../ssl/credentials");

const connection = mysql.createConnection({
    host: USER.host,
    user: USER.username,
    password: USER.password,
    database: "userdb",
    ssl: {
        ca: fs.readFileSync(path.join(__dirname, "../ssl/electwise.pem"))
    }
});

exports.connection = connection;