var request = require('request');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var backend = process.env.BACKEND_HOST || 'http://localhost:9081/test-backend';

  console.log('Making request to', backend);
  request(backend, function (err, upstreamResponse, body){
    //res.type(upstreamResponse.headers['content-type']);
    //console.log(upstreamResponse.headers['content-type']);
    res.type('application/json');
    //res.status(upstreamResponse.statusCode);
    //res.status(304);
    res.send(body);
  });
});

module.exports = router;
