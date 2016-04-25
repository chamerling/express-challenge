'use strict';

var _ = require('underscore');

var bikes = [
  {id: 1, name: 'Lapierre', price: '2499', country: 'FR', },
  {id: 2, name: 'Specialized', price: '2389', country: 'US'},
  {id: 3, name: 'Scott', price: '1999', country: 'US'},
  {id: 4, name: 'Cannondale', price: '3999', country: 'US'}
];



var getBikeById = function(id,callback) {
	var index = bikes.findIndex(i => i.id == id); //utilisation de findIndex
	console.log(index);
	if ( index != -1)
		{
		return callback(null, bikes[index]);
		}
		return callback(new Error('No bike matching '+ id));
};


var getBikeByCountry = function(country){
	var tabRes=[];
	tabRes = _.filter(bikes, function(obj) {
	return obj.country.toUpperCase() == country.toUpperCase()}) //j'ai cherché est j'ai trouvé une library
   																//underscore qui offre des methodes utiles
	return tabRes;															  
};


var getIndexBike = function(id,callback){

	var index = bikes.findIndex(i => i.id == id);
	if (index != -1)
		{
			return callback(null, index);
		}
	return callback(new Error('No bike matching'));
};


var bikeExiste = function (id,callback)
{
	getIndexBike(id,function(err){
		if(err)
		{
			return callback(null);
		}
		else
		{
			return callback(new Error('Bike Existe'));
		}
	});
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


function getId()
{

	var maxId = 0;
	for (var i = 0; i<bikes.length ; i++) {
		if (bikes[i].id > maxId)
			maxId=bikes[i].id;
	}
	console.log(maxId);
	maxId=maxId+1;
	return maxId;
}


module.exports.getBikeById = getBikeById;
module.exports.getBikeByCountry = getBikeByCountry;
module.exports.getIndexBike = getIndexBike;
module.exports.bikeExiste = bikeExiste;

module.exports.getId = getId;

/*pour laconversion des JSONs*/
module.exports.Bike = Bike;
module.exports.convertJsonsFiel = convertJsonsFiel;
module.exports.convertJsonFiel = convertJsonFiel;
module.exports.bikes = bikes;