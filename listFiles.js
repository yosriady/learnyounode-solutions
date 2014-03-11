var fs = require('fs');
var path = require('path');

module.exports = function (dir, extension, callback){
    fs.readdir(dir, function(err, files){
        if (err){
            return callback(err);
        }

        files.forEach(function(file){
            if(path.extname(file) == extension){
                callback(null, file);
            }
        });
    });
};