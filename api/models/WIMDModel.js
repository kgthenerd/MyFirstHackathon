'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
	accuracy: {
		type: Number
	},
	latitude: {
		type: Number,
	},
	longitude: {
		type: Number,
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