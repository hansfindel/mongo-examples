var mongoose = require('mongoose');

module.exports = {
	index: function(callback){
		console.log("model/user.js: index");
		var User = mongoose.model('User');

		User.find({}, function (err, users){
			if(err){
				console.log("ERR: "+err);
			}
			else {
				//console.log(users);
				callback("", users);
			}
		})
	}, 
	create: function(data, callback){
      var User = mongoose.model('User');
      var user = new User(data);
      user.save(function(err){
        console.log("saving");
        if(!err){
          console.log('User saved.');
        }
        callback();
      });
	}

} 

//User.find({'FirstName': param.firstName}, function (err, teams){