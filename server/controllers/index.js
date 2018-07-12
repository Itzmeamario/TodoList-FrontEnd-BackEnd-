var models = require('../models');
// var headers = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10, // Seconds.
//   'Content-Type': 'application/json'
// };
module.exports = {
  todos: {
    get: function (req, res) {
      models.todos.get(function(data) {
        console.log('sending message:', data);
        res.status(200).send(data);
      });
    }, // a function which handles a get request for all messages 
    post: function (req, res) {
      // console.log(req.body);
      var params = [req.body.text, req.body.name];
      models.todos.post(params, function(data) {
        console.log('posting message:', data);
        res.status(201).send(data);
      });
    } // a function which handles posting a message to the database
  },

  responsible: {
    // Ditto as above
    get: function (req, res) {
      // console.log(req.body);
      console.log(JSON.parse(Object.keys(req.query)[0]).name);
      var params = [JSON.parse(Object.keys(req.query)[0]).name];
      models.responsible.get(params, function(data) {
        console.log('data inside server get:',data);
        res.status(200).send(data);
      });
    },
    post: function (req, res) {
      console.log(req.body);
      var params = [req.body.name];
      models.responsible.post(params, function(data) {
        res.status(201).send(data);
      });
    }
  }
};

