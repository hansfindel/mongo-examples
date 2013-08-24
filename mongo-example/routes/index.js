
/*
 * GET home page.
 */
 //var models = require('../models/models');
var db;
module.exports = {
	setModels: function(models){
		db = models;
	},
	index: function(req, res){
		var User = db.user;
		User.findAll({}, function(err, users){
  			console.log(users)
  			res.render('index', { title: 'Express', users: users })	
  		});
	}, 
	createUser: function(req, res){
		var params = req.body;
		var User = db.user;
		var callback = function(err, results){
			console.log(results);
			res.redirect('/');
		}
		User.create(params, callback);
	}
}

