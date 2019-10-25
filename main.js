var http = require('http');
http.createServer(function (req, resp) {
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end('Hello, world\n');
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080');
