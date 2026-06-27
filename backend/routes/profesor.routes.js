const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesor.controller');

// Definimos que una petición GET a la raíz de este archivo disparará el controlador
router.get('/lista', profesorController.listarProfesores);

module.exports = router;