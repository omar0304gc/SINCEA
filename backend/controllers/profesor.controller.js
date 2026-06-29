const Maestro = require('../models/maestro.model');

const listarProfesores = async (req, res) => {
    try {
        
        const profesor = await Maestro.obtenerTodos();
        
        
        return res.json({
            status: 'success',
            data: profesor
        });
    } catch (error) {
        console.error('Error al listar profesores:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Error al obtener la lista de profesores desde la base de datos.'
        });
    }
};

const obtenerProfesor = async (req, res) => {

    try {

        const profesor = await Maestro.obtenerPorId(req.params.id);

        if (!profesor) {
            return res.status(404).json({
                status: 'error',
                message: 'Profesor no encontrado'
            });
        }

        res.json({
            status: 'success',
            data: profesor
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            status: 'error',
            message: 'Error del servidor'
        });

    }

};

const actualizarProfesor = async (req, res) => {

    try {

        await Maestro.actualizar(req.params.id, req.body);

        res.json({
            status: 'success',
            message: 'Perfil actualizado correctamente'
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            status: 'error',
            message: 'Error del servidor'
        });

    }

};

module.exports = {
    listarProfesores,
    obtenerProfesor,
    actualizarProfesor
};