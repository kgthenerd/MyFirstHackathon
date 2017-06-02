'use strict';
var WhereIsMyDriver = require('../controllers/WIMDController');

module.exports = function(app) {
	// The Routes
	app.route('/drivers')
		.get(WhereIsMyDriver.list_all_drivers);

	app.route('/drivers/location')
		.put(WhereIsMyDriver.update_driver_location);
};