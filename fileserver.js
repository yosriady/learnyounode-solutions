// HTTP file server
var port = process.argv[2];
var filepath = process.argv[3];

var fs = require('fs');
var http = require('http');
var server = http.createServer(function(request, response){
    data = fs.createReadStream(filepath, {encoding: 'utf8'});
    data.pipe(response);
});

server.listen(port);