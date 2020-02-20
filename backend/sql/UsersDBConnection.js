var mysql = require("mysql");
var fs = require("fs");
var path = require("path");
var credentials = require("../ssl/credentials");

const connection = mysql.createConnection({
    host: credentials.USER.host,
    user: credentials.USER.username,
    password: credentials.USER.password,
    database: credentials.USER.db,
    ssl: {
        ca: fs.readFileSync(path.join(__dirname, "../ssl/electwise.pem"))
    }
});

exports.connection = connection;