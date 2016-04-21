'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var bikes = [
  {id: 1, name: 'Lapierre', price: '2499', country: 'FR', },
  {id: 2, name: 'Specialized', price: '2389', country: 'US'},
  {id: 3, name: 'Scott', price: '1999', country: 'US'},
  {id: 4, name: 'Cannondale', price: '3999', country: 'US'}
];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
  res.send('Welcome to the bikes express challenge, check the README.md for instructions!');
});

app.get('/bikes/:country', function(req, res) {
  var Tab=[];
  for (var i= 0; i< bikes.length; i++) {
    if(bikes[i].country= req.params.country ) {
      var bike= bikes[i];
      Tab.push(bike);
      return res.status(200).json(Tab);
    }
  }
});

app.get('/bikes/:id', function(req, res) {
  for(var i=0; i<=bikes.length; i++){
    if(bikes[i].id= req.params.id ) {
      var bike= bikes[i];
      return res.status(200).json(bike);
    }
  }
});

app.delete('/bikes/:id', function(req, res){
  for(var i=0; i<bikes.length; i++){
    if(bikes[i].id== req.params.id){
      bikes.splice(i,1);
      console.log("the bike is deleted successufelly");
      return res.status(200).json(bikes);
    }
  }
return res.send("Not OK")
});

app.put('/bikes/add', function(req, res){
    var add = {
      id:req.body.id,
      price:req.body.price,
      name:req.body.name,
      country:req.body.country
    };
      bikes.push(add);
  return res.status(201).json(bikes);
});

app.put('/bikes/:price', function(req, res){
  for(var i=0; i<bikes.length; i++) {
    if(bikes[i].price == req.params.price) {
      var bike = 1.14 *  bikes[i].price;
      return res.status(200).json(bike);
    }
  }
});

/*app.get('/bikes/', function(req, res){
  for(var i=0; i<bikes.length; i++) {
    bikes[i].price == 1.14 *  bikes[i].price;
     //res.status(200).json(bikes[i]);
       res.status(200).json(bikes[i]);
    }
    //return res.status(200).json(bikes);

});*/

app.listen(3000, function () {
  console.log('Express challenge app listening on port 3000, check http://localhost:3000');
});
