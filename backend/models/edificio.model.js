const db = require('../config/db');

const Edificio = {
    // 1. Obtener todos los edificios (Para la tabla del Administrador)
    obtenerTodos: async () => {
        try {
            const [rows] = await db.execute('SELECT id, nombre, descripcion, ubicacion FROM edificios');
            return rows;
        } catch (error) {
            throw error;
        }
    },

    // 2. Obtener un solo edificio por su ID (Para cuando den clic en el croquis)
    obtenerPorId: async (id) => {
        try {
            const [rows] = await db.execute('SELECT nombre FROM edificios WHERE id = ? LIMIT 8', [id]);
            return rows[0]; // Retorna el edificio encontrado
        } catch (error) {
            throw error;
        }
    }
};

module.exports = Edificio;