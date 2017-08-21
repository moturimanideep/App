var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contactDetailsSchema = new Schema({
	username: { type: String },
	mobile: {type: Number},
	email: { type: String, required: true},
	enquirytype: {type: String},
	query: {type: String},
	userId: {type: String}
})
var Contact = mongoose.model('contact', contactDetailsSchema);

module.exports = Contact;