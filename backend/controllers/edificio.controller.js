const Edificio = require('../models/edificio.model');


const listarEdificios = async (req, res) => {
    try {
        const edificios = await Edificio.obtenerTodos();
        return res.json({ status: 'success', data: edificios });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 'error', message: 'Error en la base de datos.' });
    }
};

const obtenerNombreEdificio = async (req, res) => {
    const { id } = req.params; 
    try {
        const edificio = await Edificio.obtenerPorId(id);
        if (!edificio) {
            return res.status(404).json({ status: 'error', message: 'Edificio no encontrado.' });
        }
        return res.json({ status: 'success', nombre: edificio.nombre });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 'error', message: 'Error al procesar el croquis.' });
    }
};

module.exports = {
    listarEdificios,
    obtenerNombreEdificio
};