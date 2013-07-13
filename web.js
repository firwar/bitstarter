var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
  var mybuffer = fs.readFileSync('index.html');
  var mystring = buf.toString(mybuffer);
  response.send(mystring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
