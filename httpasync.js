var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2);
var contents = [];
var count = 0;

function getContent(index){
    http.get(urls[index], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err);
        data = data.toString();
        contents[index] = data;
        count++;

        if(count == 3){
            contents.map(function(data){
                console.log(data);
            });
        };

      }));
    });
};

for (var i = 0; i < urls.length; i++){
    getContent(i);
}