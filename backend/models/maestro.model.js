const db = require('../config/db');

const Maestro = {
    
    obtenerTodos: async () => {
        try {
            
            const [rows] = await db.execute('SELECT id_maestro, cubiculo, edificio, departamento, contacto, usuario, contrasena, nombre FROM maestros');
            return rows;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = Maestro;