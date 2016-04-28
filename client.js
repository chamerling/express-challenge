'use strict';

// For challenge 4.
// request documentation is available on https://github.com/request/request

var request = require('request');

exports.createBike = function (bikeArray, newBike) {
  request({
    url: 'http://localhost:3000/bikes',
    method: 'PUT',
    json: newBike
  }, function callback(error, response, body) {
    if(error) {
      return console.log(error);
    } else {
      bikeArray.push(newBike);
    }
  });

};
