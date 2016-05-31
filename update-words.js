var fs = require('fs');

var categories = fs.readdirSync('terms');
var allWords = {};
categories.forEach(function(category) {
  var entries = fs.readdirSync('terms/' + category);
  var words = entries.map(function(entry) {
    return entry.split('.')[0].replace(/\_/g, ' ');
  });
  allWords[category] = words;
});
fs.writeFileSync('words.js', 'var words = ' + JSON.stringify(allWords, null, '  ') + ';');
console.log('Wrote words.js');
