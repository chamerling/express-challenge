'use strict';

var bikes = [
  {id: 1, name: 'Lapierre', price: '2499', country: 'FR', },
  {id: 2, name: 'Specialized', price: '2389', country: 'US'},
  {id: 3, name: 'Scott', price: '1999', country: 'US'},
  {id: 4, name: 'Cannondale', price: '3999', country: 'US'}
];


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
	for(var i=0;i<this.bikes.length;i++)
	{
		if(bikes[i].id== id)
			return callback(new Error('bike Existe'));
	}
	return callback(null);
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


function Bike(id,name,price,country)
{
	this.id = id;
	this.name = name;
	this.price=price;
	this.country=country;
}



module.exports.getBikeById = getBikeById;
module.exports.getBikeByCountry = getBikeByCountry;
module.exports.getIndexBike = getIndexBike;
module.exports.bikeExiste = bikeExiste;

/*pour laconversion des JSONs*/
module.exports.Bike = Bike;
module.exports.convertJsonsFiel = convertJsonsFiel;
module.exports.convertJsonFiel = convertJsonFiel;
module.exports.bikes = bikes;
