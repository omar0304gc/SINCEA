const db = require('../config/db');

const Horario = {

    obtenerPorProfesor: async (idProfesor) => {

        const [rows] = await db.execute(
            `SELECT
                id_horario,
                materia,
                dia,
                hora_inicio,
                hora_fin
             FROM horarios
             WHERE id_maestro = ?
             ORDER BY
                FIELD(dia,'Lunes','Martes','Miércoles','Jueves','Viernes'),
                hora_inicio`,
            [idProfesor]
        );

        return rows;
    }

};

module.exports = Horario;