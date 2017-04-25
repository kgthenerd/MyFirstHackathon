'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WIMDSchema = new Schema({
	accuracy: {
		type: Number
	},
	latitude: {
		type: Number
	},
	longitude: {
		type: Number
	},
	radius: {
		type: Number,
		default: 500
	}
});

module.exports = mongoose.model('WIMD', WIMDSchema);