'use strict';

var mongoose = require('mongoose');
var DriverLocation = mongoose.model('LocationModel');
var WhereIsMyDriver = mongoose.model('DriverModel');
var assert = require('assert');

exports.list_all_drivers = function(req, res) {
	DriverLocation.find({}, function(err, driver) {
		if(err)
			res.send(err);
		res.json(driver);
	}).limit(10);
};

exports.update_driver_location = function(req, res) {
	var driver_location = new DriverLocation(req.body);

	if(!req.body.latitude || !req.body.longitude) {
        res.status(400).json({error: "request should contain lat and lon information"})
    }

	if (isMatch(req.body.latitude, req.body.longitude)) {
		WhereIsMyDriver.findOne({ DriverID: req.body.driver_id }, function (error, driver) {
			if (error) {
				console.log(error);
				return false;
			}
			if (driver) {
				driver_location.save(function (err, location) {
					if (err)
						res.send(err)
					res.status(200).json({});
				});	
			} else {
				res.status(404).json({});
			}
			return true;
		});

	} else {
		res.status(422).json({ error: "invalid geo cordinate values, information should be +/- 90 and +/- 180" });
	}
};

function isMatch(lat, lon) {
	var data = lat + ',' + lon;
	console.log(data);
	var exp = new RegExp(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/);
	return exp.test(data);
}