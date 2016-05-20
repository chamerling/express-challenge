'use strict';

// For challenge 4.
// request documentation is available on https://github.com/request/request


var request = require('request');
request(
    { method: 'PUT'
    , uri: 'http://localhost:3000/bikes/newbike'
    , multipart:
    [ { 'content-type': 'application/json',  body: JSON.stringify({id: '5', name: 'x', price: '3000', country: 'FR', _attachments: {'message.txt': {follows: true,length: 18, 'content_type': 'text/plain' }}})
        }
      , { body: 'I am an attachment' }
      ]
    }
  , function (error, response, body) {
      if(response.statusCode == 201){
        console.log('document saved')
      } else {
        console.log('error: '+ response.statusCode)
        console.log(body)
      }
    }
  )
