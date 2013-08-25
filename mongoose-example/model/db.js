var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	FirstName: String,
	LastName: String
});

var User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://127.0.0.1/Express-MongoDB-Example');
console.log("model/db.js: database connected");
