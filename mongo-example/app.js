
/**
 * Module dependencies.
 */


var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

var db = require('./lib/mongo_db');
var model = require('./models/models');

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.post('/user', routes.createUser)


// start server with database
db.open(function(){
	routes.setModels(model);
	//var port = app.address().port || 8080;
	var port = 3000;
	app.listen(port, function() {
		console.log("Express server listening on port %d in %s mode", port, app.settings.env);
	});
});
