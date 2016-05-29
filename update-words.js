var fs = require('fs');

var entries = fs.readdirSync('terms')
var words = entries.map(function(entry) {
  return entry.split('.')[0].replace(/\-/g, ' ');
});
fs.writeFileSync('words.js', 'var words = ' + JSON.stringify(words) + ';');
console.log('Wrote words.js');
