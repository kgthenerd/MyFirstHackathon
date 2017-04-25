'use strict';
module.exports = function (app) {
	var WhereIsMyDriver = require('../controllers/WIMDController.js');

	// The Routes
	app.route('/drivers');
	app.get(WhereIsMyDriver.list_all_drivers);

	app.route('/drivers/:driverID/location')
	app.put('WhereIsMyDriver.update_driver_location');
}