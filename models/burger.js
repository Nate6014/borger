var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.displayAll("burger", function(data) {
			cb(data);
		});
	},
	create: function(cols, vals, cb) {
		orm.create("burger", cols, vals, function(data) {
			cb(data);
		});
	},
	devour: function(objColVal, condition, cb) {
		orm.devour('burger', objColVal, condition, function(data) {
			cb(data);
		});
	},
	refresh: function(objColVal, condition, cb) {
		orm.refresh("burger", objColVal, condition, function(data) {
			cb(data);
		});
	}
};

module.exports = burger;