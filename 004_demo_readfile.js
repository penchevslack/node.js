var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('004a_demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
  // Comment here
}).listen(8080);