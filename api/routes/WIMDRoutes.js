'use strict';

module.exports = function(app) {
	var WhereIsMyDriver = require('../controllers/WIMDController');

	// The Routes
	app.route('/drivers')
		.get(WhereIsMyDriver.list_all_drivers);

	app.route('/drivers/location')
		.put(WhereIsMyDriver.update_driver_location);
};