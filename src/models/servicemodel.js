var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var serviceDetailsSchema = new Schema({
	img: { type: String },
	name: { type: String },
	type: { type: String },
})
var Service = mongoose.model('service', serviceDetailsSchema);

module.exports = Service;