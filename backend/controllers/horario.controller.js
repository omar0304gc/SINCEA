const Horario = require('../models/horario.model');

const obtenerHorario = async (req, res) => {

    try {

        const idProfesor = req.params.id;

        const horario = await Horario.obtenerPorProfesor(idProfesor);

        res.json({
            status: 'success',
            data: horario
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            status: 'error',
            message: 'Error al obtener el horario.'
        });

    }

};

module.exports = {
    obtenerHorario
};