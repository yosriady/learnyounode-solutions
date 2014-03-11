var fs = require('fs');
var path = require('path');
var filepath = process.argv[2];
var extension = "." + process.argv[3];

// fs.readdir(filepath, function(err, files){
//     if (err) throw err;
//     var filteredFiles = files.filter(function(file){return path.extname(file) == extension;});
//     for(var i = 0; i < filteredFiles.length; i++){
//         console.log(filteredFiles[i]);
//     }
// });

fs.readdir(filepath, function(err, files){
    if (err) throw err;
    files.forEach(function(file){
        if(path.extname(file) == extension){
            console.log(file);
        }
    });
});