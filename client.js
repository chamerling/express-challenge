'use strict';

// For challenge 4.
// request documentation is available on https://github.com/request/request

var request = require('request');
// create a new bike
var bike = {id: 77, name: 'I am a new bike', price: '77777', country: 'FR'}
exports.addBike=function(next){
  request.put('http://localhost:3000/bike/create', function (error,response, bikes) {
  if (!error && response.statusCode == 201) {
      next(bike)
  }
});
}
