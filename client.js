'use strict';

// For challenge 4.
// request documentation is available on https://github.com/request/request

var request = require('request');

request.put({
  var bike={
    id:'1',
    name:'Lapirre',
    price:'2499',
    country:'FR'
  };
},function(err,res){
  console.log(err.body);
});
