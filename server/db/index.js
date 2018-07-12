var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
    user     : 'foo',
    password : 'bar',
    database : 'todo_list'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to DB!');
});

module.exports = connection;