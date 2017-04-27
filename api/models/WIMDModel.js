'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
	accuracy: {
		type: Number
	},
	latitude: {
		type: Number,
		validate: function(lat) {
			return /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)/.test(lat);
		}
	},
	longitude: {
		type: Number,
		validate: function(lon) {
			return /\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(lon);
		}
	},
	radius: {
		type: Number,
		default: 500
	},
	driver_id: {
		type: Number
	}
});


var DriverSchema = new Schema(
	{ DriverID: Number, GivenName: String}, 
    { collection : 'drivers' });

module.exports = mongoose.model('LocationModel', LocationSchema);
module.exports = mongoose.model('DriverModel', DriverSchema);