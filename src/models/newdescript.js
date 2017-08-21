var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var descriptDetailsSchema = new Schema({
	servicename: {type: String},
	servicetypes:{type: Array}
})
var servicedescript = mongoose.model('servicedescript', descriptDetailsSchema);

module.exports = servicedescript;