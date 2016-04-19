'use strict';

var express = require('express');
var app = express();

var bikes = [
  {id: 1, name: 'Lapierre', price: '2499', country: 'FR', },
  {id: 2, name: 'Specialized', price: '2389', country: 'US'},
  {id: 3, name: 'Scott', price: '1999', country: 'US'},
  {id: 4, name: 'Cannondale', price: '3999', country: 'US'}
];

app.get('/', function (req, res) {
  res.send('Welcome to the bikes express challenge, check the README.md for instructions!');
});

app.get('/bikes', function(req, res) {
  return res.status(200).json(bikes);
});

app.listen(3000, function () {
  console.log('Express challenge app listening on port 3000, check http://localhost:3000');
});
