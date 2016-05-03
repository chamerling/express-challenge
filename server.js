'use strict';

var express = require('express');
var app = express();
var client = require('./client.js');

var bikes = [
  {id: 1, name: 'Lapierre', price: '2499', country: 'FR', },
  {id: 2, name: 'Specialized', price: '2389', country: 'US'},
  {id: 3, name: 'Scott', price: '1999', country: 'US'},
  {id: 4, name: 'Cannondale', price: '3999', country: 'US'}
];

// challenge 5 : convert prices from euro to dollar
app.use(function(req,res,next){
    var i=0;
    for (i=0;i<bikes.length;i++)
      bikes[i].price = (bikes[i].price*1.15575).toFixed(3); // 3 digits after after decimal point
      next ();
});


app.get('/', function (req, res) {
  res.send('Welcome to the bikes express challenge, check the README.md for instructions!');
});

// challenge 2 : get bikes per country
app.get('/bikes', function(req, res) {
  var country = req.query.country,i=0,matchedBikes=[];
  if (country){
    for (i=0;i<bikes.length;i++){
      if (bikes[i].country==country){
        matchedBikes.push(bikes[i]);
      }
    }
  }
  return res.json(matchedBikes);
});

// challenge 1 : get bike by id
app.get('/bikes/:id', function(req, res) {
  var bike = {},id=req.params.id,i=0;
    for (i=0;i<bikes.length;i++){
      if (id==bikes[i].id){
        bike=bikes[i];
        return res.json(bike) ;
        }
      }
      res.json(bike)
});

//challenge 3 : delet bike by id
app.delete('/bikes/:id', function(req, res) {
  var id=req.params.id,i=0;
    for (i=0;i<bikes.length;i++){
        if (id==bikes[i].id){
          bikes.splice (i,1);
          return res.sendStatus(204);
        }
      }
      return res.sendStatus(404)
});


// challenge 4 : add a bike
client.addBike(function (bike) {
    // this method invokes the app.put route
     bikes.push(bike)
});

app.put('/bike/create', function(req, res) {
return res.sendStatus(201)
})

app.listen(3000, function () {
  console.log('Express challenge app listening on port 3000, check http://localhost:3000');
});
