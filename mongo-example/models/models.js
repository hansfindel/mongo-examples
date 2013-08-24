var Model = require('../lib/model');
var User = Model.new('users');
var Post = Model.new('posts');
module.exports = {
	user: User, 
	post: Post
}