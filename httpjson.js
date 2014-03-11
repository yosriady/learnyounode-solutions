// HTTP JSON server
var port = process.argv[2];
var iso_route = '/api/parsetime';
var unixtime_route ='/api/unixtime';

var url = require('url');
var http = require('http');

function formatISODate(path, date){
    var data = {};
    if(path == iso_route){
        data["hour"] = date.getHours();
        data["minute"] = date.getMinutes();
        data["second"] = date.getSeconds();
    } else if (path == unixtime_route){
        data["unixtime"] = date.getTime();
    } else {

    }

    return JSON.stringify(data);
}

var server = http.createServer(function(request, response){
    var parsed_url = url.parse(request.url, true);
    var path = parsed_url.pathname;
    var query = parsed_url.query;
    var date = new Date(query["iso"]);
    var data = formatISODate(path, date);

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(data);
});

server.listen(port);