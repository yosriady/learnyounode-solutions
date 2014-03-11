var fs = require('fs');
var path = process.argv[2];
var buf = fs.readFileSync(path);
var content = buf.toString();
var numLines = content.split("\n").length;
console.log(numLines - 1);