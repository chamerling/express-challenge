'use strict';

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var request = require('./client');

// Challenge 5: Create a new Object Bike with method toDolla() so we can display the price in dollar without affecting the existing price in our databse
function Bike (_id, _name, _price, _country) {
    this.id = _id;
    this.name = _name;
    this.price = _price;
    this.country = _country;
}

Bike.prototype = {
    constructor: Bike,
    toDollar:function ()  {
      var price;
      if(this.country == 'FR') {
        price = (this.price * 1.12249).toString();
        return {id: this.id, name: this.name, price: price, country: this.country};
    } else {
      return this;
    }
  }
};

// Modification on the bikes table (challenge 5)
var bikes = [
  new Bike(1, "Lapierre", "2499", 'FR'),
  new Bike(2, "Specialized", "2389", 'US'),
  new Bike(3, "Scott", "1999", 'US'),
  new Bike(4, "Cannondale", "3999", 'US')
];

app.get('/', function (req, res) {
  res.send('Welcome to the bikes express challenge, check the README.md for instructions!');
});

// Challenge 2: The query parameter added to the '/bikes?country=<value>'
app.get('/bikes', function(req, res) {
  var country = req.query.country;
  var filteredBikes = bikes.filter(function(bike) {return bike.country === req.query.country.toUpperCase()});
  if (filteredBikes.length === 0) {
    return res.status(200).json(bikes)
  }
  return res.status(200).json(filteredBikes);
  // if(country){
  //   var bikesByCountry = [];
  //   for(var i = 0; i < bikes.length; i ++) {
  //     if(country.toUpperCase() == bikes[i]['country']) {
  //       bikesByCountry.push(bikes[i].toDollar());
  //     }
  //   }
  //   return res.json(bikesByCountry);
  // } else {
  //   var result = [];
  //   for(var i = 0; i < bikes.length; i ++) {
  //     result.push(bikes[i].toDollar());
  //   }
  //   return res.status(200).json(result);
  // }
});

//Challenge 1: Adding new route to get a single bike by calling its id
app.get('/bikes/:id', function(req, res) {
  for(var i = 0; i < bikes.length; i++) {
    if(bikes[i] && bikes[i]['id'] == req.params.id) {
      return res.json(bikes[i].toDollar());
    }
  }
  return res.status(404).json('No bike with the id ' + req.params.id);
});

// challenge 3: Deleting a bike from the database
app.delete('/bikes/:id', function(req, res) {
  for(var i = 0; i < bikes.length; i++) {
    if(bikes[i]['id'] == req.params.id) {
      bikes.splice(i,1);
      return res.sendStatus(200);
    }
  }
});

// Challenge 4: I could do much better if there wasn't the request module. I did my best but I'm not satisfied with my work on this challenge
app.put('/bikes', function(req, res, next) {
  var bike = new Bike(req.body.id, req.body.name, req.body.price, req.body.country);
  request.createBike(bikes, bike);
  res.status(201).json(bike);

});

app.listen(3000, function () {
  console.log('Express challenge app listening on port 3000, check http://localhost:3000');
});
