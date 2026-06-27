const express = require('express');
const router = express.Router();
const edificioController = require('../controllers/edificio.controller');

// Ruta para la tabla del Administrador (GET http://localhost:3000/api/edificios)
router.get('/', edificioController.listarEdificios);

// Ruta para el clic del Croquis (GET http://localhost:3000/api/edificios/nombre/3)
router.get('/nombre/:id', edificioController.obtenerNombreEdificio);

module.exports = router;