var elements = process.argv.slice(2);
var sum = elements.reduce(function(prev, curr, index, array){return Number(prev) + Number(curr);});
console.log(sum);