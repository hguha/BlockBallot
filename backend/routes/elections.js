var express = require('express');
var router = express.Router();

// GET elections listing.
// Example of how data will be passed between frontend and backend.
// The front end will hit a route in the backend, the backend will talk to AWS,
// and the response from AWS can then be manipulated and sent as to the frontend
// for React to make use of.
router.get('/', function(req, res, next) {
  const mockElections = [
    {
        title: "Mock Election 1",
        totalVotes: 45780,
        opens: "01/01/1990, 9:00AM",
        closes: "01/01/1990, 5:00PM",
        categories: ["Group 0", "Group 1", "Group 2"],
        options: [{category: 0, key: 0, value: "Option A"}, {category: 0, key: 1, value: "Option B"}, 
                  {category: 0, key: 2, value: "Option C"}, {category: 0, key: 3, value: "Option D"},
                  {category: 1, key: 4, value: "Option E"}, {category: 1, key: 5, value: "Option F"}, 
                  {category: 1, key: 6, value: "Option G"}, {category: 1, key: 7, value: "Option H"},
                  {category: 2, key: 8, value: "Option I"}, {category: 2, key: 9, value: "Option J"}, 
                  {category: 2, key: 10, value: "Option K"}, {category: 2, key: 11, value: "Option L"}],
        results: [{category: 0, key: 12, name: "Option A", value: 450}, {category: 0, key: 13, name: "Option B", value: 23}, 
                  {category: 0, key: 14, name: "Option C", value: 284}, {category: 0, key: 15, name: "Option D", value: 376},
                  {category: 1, key: 16, name: "Option E", value: 948}, {category: 1, key: 17, name: "Option F", value: 46}, 
                  {category: 1, key: 18, name: "Option G", value: 726}, {category: 1, key: 19, name: "Option H", value: 878},
                  {category: 2, key: 20, name: "Option I", value: 86}, {category: 2, key: 21, name: "Option J", value: 154}, 
                  {category: 2, key: 22, name: "Option K", value: 74}, {category: 2, key: 23, name: "Option L", value: 978}]
    },
    {
        title: "Mock Election 2",
        totalVotes: 3869,
        opens: "01/01/1990, 9:00AM",
        closes: "01/02/1990, 5:00PM",
        options: [{ key: 0, value: "Option A"}, {key: 1, value: "Option B"}, 
                  {key: 2, value: "Option C"}, {key: 3, value: "Option D"}]
    },
    {
        title: "Mock Election 3",
        totalVotes: 87901,
        opens: "01/03/1990, 9:00AM",
        closes: "01/03/1990, 5:00PM",
        options: [{ key: 0, value: "Option A"}, {key: 1, value: "Option B"}, 
                  {key: 2, value: "Option C"}, {key: 3, value: "Option D"}]
    },
    {
        title: "Mock Election 4",
        totalVotes: 87901,
        opens: "01/01/1990, 9:00AM",
        closes: "01/03/1990, 5:00PM",
        options: [{ key: 0, value: "Option A"}, {key: 1, value: "Option B"}, 
                  {key: 2, value: "Option C"}, {key: 3, value: "Option D"}]
    },
    {
        title: "Mock Election 5",
        totalVotes: 87901,
        opens: "01/03/1990, 9:00AM",
        closes: "01/05/1990, 5:00PM",
        options: [{ key: 0, value: "Option A"}, {key: 1, value: "Option B"}, 
                  {key: 2, value: "Option C"}, {key: 3, value: "Option D"}]
    },
    {
        title: "Mock Election 6",
        totalVotes: 87901,
        opens: "01/07/1990, 9:00AM",
        closes: "01/11/1990, 5:00PM",
        options: [{ key: 0, value: "Option A"}, {key: 1, value: "Option B"}, 
                  {key: 2, value: "Option C"}, {key: 3, value: "Option D"}]
    }
  ];

  res.json(mockElections);
});

module.exports = router;
