'use strict';

var mongoose = require('mongoose');
var DriverLocation = mongoose.model('LocationModel');
var WhereIsMyDriver = mongoose.model('DriverModel');
var assert = require('assert');

exports.list_all_drivers = function(req, res) {
	WhereIsMyDriver.find({}, function(err, driver) {
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

    console.log(isMatch(req.body.latitude, req.body.longitude))

	WhereIsMyDriver.findOne({ DriverID: req.body.driver_id }, function(error, driver){
		if(error) {
			console.log(error);
			return false;
		}
		if(driver) {
			console.log('driver found' + driver);
			driver_location.save(function (err, location) {
				if (err)
					res.send(err)
				res.status(200).json({ success: "location saved" });
			});	
		} else {
			console.log("Driver not found" + driver);
		}
		return true;
	});
};


function isMatch(lat, lon) {
	var data = lat + ',' + lon;
	console.log(data);
	var exp = new RegExp('/^([-+]?\d{1,2}[.]\d+),\s*([-+]?\d{1,3}[.]\d+)$/');
	return exp.test(data);
}


/*function findDriverId(info, cb) {
	WhereIsMyDriver.find({driver_id: info.driver_id}, function(err, docs) {
		if(!docs.length) {
			cb('driver id not found', null);
		} else {
			info.save(function(err) {
				cb(err, info);
			});
		}
	})
}*/

/*if (isMatch(req.body.latitude, req.body.longitude)) {
		DriverLocation.findById(req.body.driver_id, function (err, driverNotFound) {
			if (err && driverNotFound) {
				findDriverId(driverNotFound, function (MOARError, info) {
					if (MOARError || info) {
						res.status(400).json({ error: 'error updating driver location' });
						console.log('error updating driver location', MOARError);
					} else {
						res.status(200).json({ success: 'driver location updated' });
						console.log('driver lcoation updated')
					}

				});
			}
		});
	} else {
		res.status(422).json({ error: "invalid geo cordinate values" });
	}*/