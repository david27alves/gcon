var express = require('express');
var multer = require('multer');
var uploadConfig = require('./config/upload');

var SessionController = require('./controllers/SessionController');
var ConhecimentoController = require('./controllers/ConhecimentoController');

var routes = express.Router();
var upload = multer(uploadConfig);


routes.post('/sessions', SessionController.store);

routes.get('/conhecimentos', ConhecimentoController.index)
routes.post('/conhecimentos', upload.single('imagem'), ConhecimentoController.store);

module.exports = routes;