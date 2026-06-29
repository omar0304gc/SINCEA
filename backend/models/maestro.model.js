const db = require('../config/db');

const Maestro = {

    obtenerTodos: async () => {
        try {
            const [rows] = await db.execute(
                'SELECT id_maestro, cubiculo, edificio, departamento, contacto, usuario, contrasena, nombre FROM maestros'
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },

    obtenerPorId: async (id) => {
        try {
            const [rows] = await db.execute(
                `SELECT id_maestro, nombre, cubiculo, edificio, departamento, contacto
                 FROM maestros
                 WHERE id_maestro = ?`,
                [id]
            );

            return rows[0];
        } catch (error) {
            throw error;
        }
    },

    actualizar: async (id, datos) => {
        try {

            const {
                nombre,
                cubiculo,
                edificio,
                departamento,
                contacto
            } = datos;

            await db.execute(
                `UPDATE maestros
                 SET nombre=?,
                     cubiculo=?,
                     edificio=?,
                     departamento=?,
                     contacto=?
                 WHERE id_maestro=?`,
                [
                    nombre,
                    cubiculo,
                    edificio,
                    departamento,
                    contacto,
                    id
                ]
            );

        } catch (error) {
            throw error;
        }
    }

};

module.exports = Maestro;