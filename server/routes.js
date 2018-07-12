var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/todos', controller.todos.get);

router.post('/todos', controller.todos.post);

router.get('/responsible', controller.responsible.get);

router.post('/responsible', controller.responsible.post);

module.exports = router;