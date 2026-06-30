const db = require('../config/db');

const Edificio = {

    obtenerTodos: async () => {
        try {
            const [rows] = await db.execute('SELECT id, nombre, descripcion, ubicacion, imagen FROM edificios');
            return rows;
        } catch (error) {
            throw error;
        }
    },

    obtenerPorId: async (id) => {
        try {
            const [rows] = await db.execute('SELECT nombre FROM edificios WHERE id = ? LIMIT 40', [id]);
            return rows[0]; 
        } catch (error) {
            throw error;
        }
    }
};

module.exports = Edificio;