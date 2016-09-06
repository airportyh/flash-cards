var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(7878, function(){
	console.log('Listening on port 7878...');
});
