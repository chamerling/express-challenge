'use strict';

// For challenge 4.
// request documentation is available on https://github.com/request/request

var request = require('request');

request({
   method: 'PUT',
   uri: 'http://localhost:3000/bikes',
   json: {name: 'Trek', price: '4589', country: 'US'}

}, function(error, request, body){
   console.log(body);
});