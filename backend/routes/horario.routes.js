const express = require('express');

const router = express.Router();

const horarioController = require('../controllers/horario.controller');

router.get('/:id', horarioController.obtenerHorario);

module.exports = router;