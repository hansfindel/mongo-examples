
/*
 * GET home page.
 */
var User = require('../model/user');

module.exports = {
  index: function(req, res){
    User.index(function(err, users){
      res.render('index', {
        title:"Express with Mongoose",
        users: users
      });
    });
  }, 
  createUser: function(req, res){
    User.create(req.body, function(){
    	res.redirect("/");
    })
  }
}