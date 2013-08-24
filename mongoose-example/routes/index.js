
/*
 * GET home page.
 */
var User = require('../model/user');

exports.index = function(req, res){
  User.index(function(err, users){
    res.render('index', {
      title:"Express with Mongoose",
      users: users
    });
  });
}