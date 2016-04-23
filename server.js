'use strict';

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var bikes = [
  {id: 1, Name: 'Lapierre', price: '2499', Country: 'FR', },
  {id: 2, Name: 'Specialized', price: '2389', Country: 'US'},
  {id: 3, Name: 'Scott', price: '1999', Country: 'US'},
  {id: 4, Name: 'Cannondale', price: '3999', Country: 'US'}
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

//challenge1
app.get('/bikes/reqbyid/:id',function(req, res){
		
	var i=0;
	var returnbike; 
	while(i< bikes.length){
	if(bikes[i].id == req.params.id){
        	returnbike = bikes[i];
      		return res.status(200).json(returnbike);
        }
	i++;
	}
  if (i>= bikes.length) return res.status(404).send('The bike you"re looking for was not found');
});
//challenge2
app.get('/bikes/:country',function(req, res) {
	var returnbikes = []; //array of bikes to return as json
	for (var i=0;i<bikes.length;i++){
	if (bikes[i].country === req.params.country) returnbikes.push(bikes[i]);
	}
	return res.status(200).json(returnbikes);
});
//challenge3
app.delete('/bikes/deletebike/:id',function(req, res){
		
	var i = 0; 
	while (i< bikes.length){
	if(bikes[i].id == req.params.id){
		bikes.splice(i ,1);
		return res.status(200).json(bikes);
	}
  }
  return res.status(400).json(false);
});
//challenge4
app.put('/bikes/newbike',function(req, res) {
	var newbike = {"id":req.body.id, "name":req.body.name, "price":req.body.price, "country":req.body.country};
	bikes.push(newbike);
	return res.status(201).json(bikes);
});
//challenge5
app.get('/bikesusd',function(req, res) {
	var returnbikes = [];
	for (var i = 0; i < bikes.length; i++) {
		var bike = bikes[i];
		bike.price *= 1.12235;
		returnbikes[i]=bike;
	}
	return res.status(200).json(returnbikes);
});



