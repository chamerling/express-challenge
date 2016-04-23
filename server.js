'use strict';

var express = require('express');
var app = express();


/*to get body params*/
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*end body parser*/


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
  return res.status(200).json(convertJsonsFiel(bikes));
});

app.listen(3000, function () {
  console.log('Express challenge app listening on port 3000, check http://localhost:3000');
});



var getBikeById = function(id,callback) {

	for(var i=0;i<bikes.length;i++)
	{
		if (bikes[i].id== id)
		{
		return callback(null, bikes[i]);
		}
	}

		return callback(new Error('No bike matching '+ id));
};


var getBikeByCountry = function(country)	{
	var tabRes=[];
	for(var i=0;i<bikes.length;i++)
	{
		if (bikes[i].country== country)
		{
			 var bike = bikes[i];
			 tabRes.push(bike);
		}
	}
	return tabRes;
};

var getIndexBike = function(id,callback){

	for(var i=0;i<bikes.length;i++)
	{
		if (bikes[i].id== id)
		{
			return callback(null, i);
		}
	}
	return callback(new Error('No bike matching'));
};


var bikeExiste = function (id,callback)
{
	for(var i=0;i<bikes.length;i++)
	{
		if(bikes[i].id== id)
			return callback(new Error('bike Existe'));
	}
	return callback(null);
}

app.get('/bike/:id', function(req, res) {

	getBikeById(req.params.id,function(err,bike){
		if(err)
		{
			res.status(404).send("No bike matching");
		}
		else
		{
		return res.status(200).json(convertJsonFiel(bike)); // nous pouvons utilisé .send	
		}
	});

});

//bikes with params
app.get('/bikes/:country', function(req, res) {
	
	var tab = getBikeByCountry(req.params.country);
  	return res.status(200).json(convertJsonsFiel(tab));

});


app.delete('/bike/:id', function (req, res) {
	getIndexBike(req.params.id,function(err,indexToRemove){
		if (err)
			{
				res.status(404);
				return res.send('Error 404: No bike found with id : '+req.params.id);
			}
			else
			{
				bikes.splice(indexToRemove,1);
				return res.status(202).send();//status accepted!
			}
	

	});
	

});


app.put('/bike', function(req, res) {
	
	bikeExiste(req.body.id,function(err){
		if (err)
		{
			res.send("Bike Existe!");
		}
		else
		{
			var id = req.body.id;
			var name =req.body.name;
			var price =req.body.price;
			var country = req.body.country;
			//res.send("id " +id+ " name" + name+ " price " +price+ "country "+country);
			var bike = new Bike(id,name,price,country);
			
			//res.status(202).send(req.body.id);
			//return res.status(200).json(bike); // nous pouvons utilisé .send

			bikes.push(bike);
			
			res.status(201).send(bike);
		}
	});
});


function Bike(id,name,price,country)
{
	this.id = id;
	this.name = name;
	this.price=price;
	this.country=country;
}

function convertJsonsFiel(jsons)
{
	var l = jsons.length;

	for(var i=0;i<l;i++)
	{
	jsons[i].price = jsons[i].price * 1.122;
	console.log(jsons[i].price);
	}
	return jsons;
}


function convertJsonFiel(json)
{
	json.price = json.price * 1.122;
	return json;
}