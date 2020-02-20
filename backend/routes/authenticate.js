var express = require('express');
var router = express.Router();
var UsersDBConnectionModule = require("../sql/UsersDBConnection");
var usersDBConnection = UsersDBConnectionModule.connection;
usersDBConnection.connect();

router.get('/voter/fName/:fName/lName/:lName/dob/:dob', function(req, res) {
  const { fName, lName, dob } = req.params;

  const query = `SELECT * FROM userdb WHERE firstname = "${fName}" AND lastname = "${lName}" AND birth = "${dob}"`;
  usersDBConnection.query(query, function(error, results) {
    if (error) {
      res.send(error);
    }
    res.send(JSON.stringify(results));
  });
});

module.exports = router;
