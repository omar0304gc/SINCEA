const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesor.controller');

router.get('/lista', profesorController.listarProfesores);

router.get('/:id', profesorController.obtenerProfesor);

router.put('/:id', profesorController.actualizarProfesor);

module.exports = router;