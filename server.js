'use strict';

var express = require('express');
var bodyParser = require('body-parser'); 
var app = express();



app.use(bodyParser.urlencoded({extented:false}));
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


/*
 * Challenge 2
 */ 

app.get('/bikes', function(req, res) {

	function GetByCountry (bike){
		return bike.country == req.param('country');
	}

	var BikeByCountry = bikes.filter(GetByCountry);

      /* we update all prices in dollars (challenge 5)*/

	var bikepriceindollard = BikeByCountry.map(function(bike){
        
        var bikes = {};
        bikes['id'] = bike.id;
        bikes['name'] = bike.name;
        bikes['price'] = bike.price * 1.14;
        bikes['country'] = bike.country;

        return bikes;
	});

  /* we update all prices in dollars (challenge 5)*/

    var AllBikes = bikes.map(function(bike){

    	var bikes = {};
    	bikes['id'] = bike.id;
    	bikes['name'] = bike.name;
    	bikes['price'] = bike.price * 1.14;
    	bikes['country'] = bike.country;

    	return bikes;
    });
    
	if(req.param('country')){

		return res.status(200).json(bikepriceindollard);
	}
	else{
        return res.status(200).json(AllBikes);
	}
});



/*
 * Challenge 1
 */
app.get('/bike/:id',function(req,res){

    function GetBikeById(bike){
    	return bike.id == req.params.id;
    }

    var bike = bikes.find(GetBikeById);

    /* we update price in dollars (challenge 5)*/
    bike.price = bike.price * 1.14;

    return res.status(200).json(bike);

});

 /*
 * Challenge 3
 */


app.delete('/bikes/:id',function(req,res){

		for(var i = bikes.length-1;i--;){

			if(bikes[i].id === req.params.id){
                var bike = {};
                bike = bikes[i];
				bikes.splice(i,1);

				return res.status(204).json(bike); 
			} 
		}
		    
});

 /*
 * Challenge 4
 */


 app.put('/bikes/create',function(req,res){

     /* Get variable */
    var name = req.body.name;
    var price = req.body.price;
    var country = req.body.country;
    
    /* Generate random id*/
    /* PS : he's not an ideal solution */
    var max = 99999999999;
    var min = 0;

    
     function randomId(min,max){
        return Math.floor(Math.random() * (max-min) + min);
    }

    var id = randomId(min,max);

    var bike = {id:id,name:name,price:price,country:country};
    bikes.push(bike);
    return res.status(201).json(bike);
 
 });


 


app.listen(3000, function () {
  console.log('Express challenge app listening on port 3000, check http://localhost:3000');
});
