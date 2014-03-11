var fs = require('fs');
var path = process.argv[2];
fs.readFile(path, "utf8", function(err, data){
    if (err) throw err;
    var numLines = data.split("\n").length;
    console.log(numLines - 1);
});