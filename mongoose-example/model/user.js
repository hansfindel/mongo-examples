var mongoose = require('mongoose');

module.exports = {
	index: function(callback){
		console.log("model/team.js: teamlist");
		var User = mongoose.model('User');

		User.find({}, function (err, users){
			if(err){
				console.log("ERR: "+err);
			}
			else {
				console.log(users);
				callback("", users);
			}
		})
	}

} 

//User.find({'FirstName': param.firstName}, function (err, teams){