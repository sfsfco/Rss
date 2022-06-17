var express = require('express');
var route = express();

// import controller
const importController = require('./controllers/importController');

// create route
route.post('/articles/import',importController.create);
route.get('/articles/list',importController.list);


// exprot route
module.exports = route;