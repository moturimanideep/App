var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bookDetailsSchema = new Schema({
	
	userid: {type: String},
	username: { type: String},
	mobile: {type: Number},
	servicename: {type: String},
	subservicename: {type: String, default: null},
	address: {type: String},
	date: {type: String},
	time: {type: String},
	servicestatus: {type: String, default: "Incomplete"}
	
})
var Book = mongoose.model('book', bookDetailsSchema);

module.exports = Book;