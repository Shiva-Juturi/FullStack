var http = require('http');
var dt = require('./a');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently  Sambasiva Rao : " + dt.myDateTime());
  res.end();
}).listen(8081);