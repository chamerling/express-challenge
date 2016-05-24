'use strict';

var express = require('express');
var app = express();

var bikes = [
  {id: 1, name: 'Lapierre', price: '2499', country: 'FR' },
  {id: 2, name: 'Specialized', price: '2389', country: 'US'},
  {id: 3, name: 'Scott', price: '1999', country: 'US'},
  {id: 4, name: 'Cannondale', price: '3999', country: 'US'}
];

app.get('/', function (req, res) {
  res.send('Welcome to the bikes express challenge, check the README.md for instructions!');
});

app.get('/bikes', function(req, res) {
	var newbikes=[];
  for(var i=0;i<bikes.length;i++){
  	newbikes[i]=bikes[i]
  	newbikes[i].price *= 1.12;
  }
  return res.status(200).json(newbikes);
});

//challenge 1
app.get('/bikes/searchbike/:id',function(req,res){
	var t =bikes.length + 1;
	for(var i =0 ; i < bikes.length; i++)
	{   
		req.params.id = parseInt(req.params.id);
		if(bikes[i].id === req.params.id){
			
			t=i;

		}
	};
	if(t > bikes.length)
	{
		res.send("We can't find this bike");
	}
    else{
    	return res.status(200).json(bikes[t]);
    }
    })

//challenge 2
app.get('/bikes/search',function(req,res){
	var array = [];
	if(!req.query.country)
	{
		res.send("you need to set a parameter");
	}
	else {
		for(var i=0;i<bikes.length;i++)
		{
			if(bikes[i].country === req.query.country)
			{	
				array.push(bikes[i]);
			}
			
		}
		if(array.length === 0)
			{
				res.send("this country is not available !!!");
			}
			else 
			{
				res.status(200).json(array);
			}
	}
	
})

//challenge 3
app.get('/bikes/delete',function(req,res){
	if(!req.query.id)
	{
		res.send("you need to pass a valid id to delete");
	}
	else
	{   
	    req.query.id = parseInt(req.query.id); 
		var test = 0;
		var i = 0;
		while(i < bikes.length && (test === 0))
		{   
			i++;
			if(bikes[i].id === req.query.id)
			{
				bikes.splice(i,1);
				test = 1;
			}
		}
		if(test === 0)
		{
			
			res.send("set a valid id");
		}
		else{
			    res.status(202).json(bikes);  
			}
	}

//challenge 4
app.put('/createbike',function(req,res){
	if(!req.body.id)
	{
		res.send("there is no new bike send by the client");
	}else{
		var bike = {"id":req.body.id, "name":req.body.name, "price":req.body.price, "country":req.body.country};
		bikes.push(bike);
		res.status(201).json(bikes);
	}
	

})
})
app.listen(3000, function () {
  console.log('Express challenge app listening on port 3000, check http://localhost:3000');
});
