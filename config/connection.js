// require mysql
const mySql = require('mysql');

// create variable for connection
var connection;

// connect with either jawsDB in heroku or with local credentials
if (process.env.JAWSDB_URL) {
    connection = mySql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mySql.createConnection({
        // personal credentials for mysql here
        host: "localhost",
        port: 3001,
        user: "root",
        password: "",
        database: "tree_viewDB"
    });
};

// make the connection
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

module.exports = connection;