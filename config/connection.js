//Import MySQL dependency
var mysql = require("mysql");
var connection;

//Define connection parameters
	connection = mysql.createConnection({
		port: '3306',
		host: 'localhost',
		user: 'root',
		password: '(Zenith)6014',
		database: 'burgers_db'
	});

//Create connection
connection.connect(function(error) {
  if (error) {
    console.error('Connection error: ' + error.stack);
    return;
  }
  console.log('MySQL connection established! Connected as ID ' + connection.threadId);
});

// Export connection for ORM
module.exports = connection;