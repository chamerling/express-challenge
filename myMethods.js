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

/*
var getBikeByCountry = function(country){
	var tabRes=[];
	tabRes = _.filter(bikes, function(obj) {
	return obj.country.toUpperCase() == country.toUpperCase()}) //j'ai cherché est j'ai trouvé une library
   									//underscore qui offre des methodes utiles
	return tabRes;															  
};
*/

var getBikeByCountry = function(country){
	var tabRes=[];
	tabRes = bikes.filter(function(obj) {
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

/*
function convertJsonsFiel(jsons)
{
	var l = jsons.length;
	var t = Object.create(jsons); //pour créer un autre obj
	for(var i=0;i<l;i++)
	{
	t[i] = convertJsonFiel(jsons[i]);
	}
	return t;
}
*/

function convertJsonFiel(json) //j'ai joué sur la création d'un nouveau obj pour que le tableau initiale ne change pas!
{
	var obj = Object.create(json);
	obj.id=json.id;
	obj.name=json.name;
	obj.price = json.price * 1.122;
	obj.country=json.country;
	return obj;
}



function convertJsonsFiel(json) //j'ai joué sur la création d'un nouveau obj pour que le tableau initiale ne change pas!
{
	console.log(json);
	
	var newArray = json.map(function(element){
		console.log("element in the map  : ");
		console.log(element);
		var newElement = convertJsonFiel(element);
		console.log("element to return  : ");
		console.log(newElement);

		return newElement;
	});
	return newArray;
}




function Bike(id,name,price,country)
{
	this.id = id;
	this.name = name;
	this.price=price;
	this.country=country;
}


/*ici je prend le max de l'id, aprés nous pouvons ajouter une fonction qui permet de chercher les trous dans la suite des ID*/
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