'use strict';

// For challenge 4.
// request documentation is available on https://github.com/request/request

var request = require('request');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

request.put({
  method: 'put',
  url:'http://localhost:3000/bikes/add',
  json:{ 'content-type': 'application/json',body: JSON.stringify({id: 'id', name:'name',price:'price', country:'country'}) }
    function (error, response, body) {
      if (error) {
        return console.error('Error', error);
      }
      console.log('Cool Server responded with:', body);
    })
});
