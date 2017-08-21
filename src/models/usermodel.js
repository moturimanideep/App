var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userDetailsSchema = new Schema({
	username: { type: String, unique: true, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role: { type: String, default: 'user'}, 
	mobile: {type: Number},
	profilepic: {type: String, default: null},
	address: {type: String, default: null},
	token: {type: String, default: '14622aaaaa'}
})
var User = mongoose.model('user', userDetailsSchema);

module.exports = User;