const Maestro = require('../models/maestro.model');

const listarProfesores = async (req, res) => {
    try {
        // Le pedimos al modelo que traiga las filas de MySQL
        const profesor = await Maestro.obtenerTodos();
        
        // Se los respondemos a Angular de forma limpia
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

module.exports = {
    listarProfesores
};