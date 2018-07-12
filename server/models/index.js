var db = require('../db');

module.exports = {
  todos: {
    get: function (callback) {
      var queryString = 'SELECT t.text, r.name FROM todos t \
      LEFT OUTER JOIN responsible r ON (r.idResponsible = t.idResponsible) \
      order by t.idResponsible desc';
      db.query(queryString, function(err, data) {
        if(err) {
          console.error('1',err);
        } 
        callback(data);
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryString = 'INSERT INTO todos(text, idResponsible) \
      VALUES(?, (SELECT idResponsible FROM responsible where name = ? limit 1))';
      db.query(queryString, params, function(err, data, third) {
        if(err) {
          console.error('2',err);
        }
        callback(data);
      });   
    } // a function which can be used to insert a message into the database
  },

  responsible: {
    // Ditto as above.
    get: function (params, callback) {
      var queryString = 'SELECT name FROM responsible WHERE name = ?';
      console.log('params:', params);
      db.query(queryString, params, function(err, data) {
        if(err) {
          console.error('3',err);
        }
        callback(data);
      });
    },
    post: function (params, callback) {
      var queryString = 'INSERT INTO responsible(name) \
      VALUES(?)';
      db.query(queryString, params, function(err, data) {
        if(err) {
          console.error('4',err);
        }
        callback(data);
      });      
    }
  }
};

