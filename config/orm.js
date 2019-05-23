var connection = require('./connection.js');


function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

function objToSql(object) {
	var arr = [];

	for (var key in object) {
		arr.push(key + "=" + object[key]);
	}

	return arr.toString();

}

var orm = {
	displayAll: function(table, cb) {
		// the double ?? are for 2 differnt elements
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, table, function(err, res) {
			if (err) throw err;
			cb(res);
		});
	},
	create: function(table, cols, vals, cb) {
	
		var queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";


		connection.query(queryString, vals, function(err, result) {
			if (err) {
				console.log("error at orm create function " + err);
			}
			cb(result);
		});
	},
	devour: function(table, objColVal, condition, cb) {
		var queryString = "UPDATE " + table;
		queryString += " SET ";
		queryString += objToSql(objColVal);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) {
				console.log("err at ORM DEVOUR " + err);
			}
			cb(result);
		});
	},
	refresh: function(table, objColVal, condition, cb) {
		var queryString = "UPDATE " + table;
		queryString += " SET ";
		queryString += objToSql(objColVal);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) {
				console.log("err at ORM re order" + err);
			}
			cb(result);
		})
	}
};

module.exports = orm;