'use strict';

// For challenge 4.
// request documentation is available on https://github.com/request/request

var request = require('request');

request({
  methode : 'PUT',
  uri : 'https://127.0.0.1:3000/addBike',
  headers: [
        {
          name: 'content-type',
          value: 'application/json'
        }
      ],
  postData : [
    {
        "id" : "5" ,
        "name" : "DALI" ,
        "price" : "5000",
        "country" : "TN"
    }
  ]
  
}, function (req, rep){
  console.log(rep);
})
