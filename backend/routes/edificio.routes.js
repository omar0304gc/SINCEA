const express = require('express');
const router = express.Router();
const edificioController = require('../controllers/edificio.controller');


router.get('/', edificioController.listarEdificios);


router.get('/nombre/:id', edificioController.obtenerNombreEdificio);

module.exports = router;