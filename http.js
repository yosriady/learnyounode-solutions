var http = require('http');
var url = process.argv[2];

http.get(url, function(res){
    res.setEncoding('utf8');
    res.on('data', function(data){
        console.log(data);
    });

    res.on('error', function(e){
        console.log("error: " + e.message);
    });

});