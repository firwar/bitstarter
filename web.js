var express = require('express');
var fs = require('fs');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  mybuffer = new Buffer(256);
  mybuffer = fs.readFileSync('index.html');
  var mystring = mybuffer.toString();
  response.send(mystring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
