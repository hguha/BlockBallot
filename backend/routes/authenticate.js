var express = require('express');
var router = express.Router();
var UsersDBConnectionModule = require("../sql/UsersDBConnection");
var usersDBConnection = UsersDBConnectionModule.connection;
usersDBConnection.connect();

router.get('/voter/fName/:fName/lName/:lName/dob/:dob', function(req, res, next) {
  //usersDBConnection.connect();

  console.log(req.params);
  const { fName, lName, dob } = req.params;

  const query = `SELECT * FROM login WHERE firstname = ${fName} AND lastname = ${lName} AND birth = ${dob}`;
  const response = usersDBConnection.query(query, function(error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
      console.log(fields);
    }

    res.send(results);
  });

  //usersDBConnection.end();
  res.send(response);
});

module.exports = router;
