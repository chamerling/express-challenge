'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

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

app.get('/bikes/:id', function(req, res) {
  for(var i = 0 ; i < bikes.length ;i++){
    if (bikes[i].id == req.params.id) {
      return res.status(200).json(bikes[i]);
    }
  }
});

app.get('/bikes/country/:country', function(req, res) {
  var  result = [];
  for(var i = 0 ; i < bikes.length ;i++){
    if (bikes[i].country == req.params.country) {
      result.push(bikes[i]);
    }
  }
  return res.status(200).json(result);
});

  app.delete('/delete/:id', function(req, res){
    for(var i = 0 ; i < bikes.length ;i++){
      if (bikes[i].id == req.params.id) {
       bikes.splice(i,1);
      }
    }
    return res.status(200).json(bikes);
  });
  
  app.get('/bikesDollars', function(req, res){
   for(var i = 0 ; i < bikes.length ;i++){
      bikes[i].price =  parseFloat(bikes[i].price) * 0.75 ;
    }
    return res.status(200).json(bikes);
  });
  
  app.put('/addBike', function(req, res){
    bikes[bikes.length] = req.body;
    return res.status(200).json(bikes);
  });
