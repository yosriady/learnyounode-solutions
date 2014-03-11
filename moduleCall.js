var listFiles = require('./listFiles.js');
var filepath = process.argv[2];
var extension = "." + process.argv[3];

listFiles(filepath, extension, function(err, data){if (err) throw err; console.log(data);});