const db = require('../config/db');

const Maestro = {
    
    obtenerTodos: async () => {
        try {
            // Hacemos el query clásico para traer los datos de tus maestros
            const [rows] = await db.execute('SELECT id_maestro, cubiculo_jefatura, edificio_jefatura, contacto, usuario, contrasena, nombre FROM maestros');
            return rows;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = Maestro;