const db = require('../config/db');

const login = async (req, res) => {
    const { usuario, contrasena } = req.body;

   
    if (!usuario || !contrasena) {
        return res.status(400).json({ status: 'error', message: 'Por favor, rellene todos los campos.' });
    }

    try {
        
        const queryAlumno = 'SELECT matricula, nombre, curp, carrera FROM alumnos WHERE matricula = ? AND curp = ? LIMIT 1';
        const [alumnos] = await db.execute(queryAlumno, [usuario, contrasena]);

        if (alumnos.length > 0) {
            const alumno = alumnos[0];
            return res.json({
                status: 'success',
                message: 'Acceso concedido como Alumno',
                alumno: {
                    matricula: alumno.matricula,
                    nombre: alumno.nombre,
                    carrera: alumno.carrera,
                    rol: 'alumno' 
                }
            });
        }

      
        const queryMaestro = 'SELECT nombre, contrasena FROM maestros WHERE nombre = ? AND contrasena = ? LIMIT 1';
        const [maestros] = await db.execute(queryMaestro, [usuario, contrasena]);

        if (maestros.length > 0) {
            const maestro = maestros[0];
            return res.json({
                status: 'success',
                message: 'Acceso concedido como Profesor',
                alumno: { 
                    matricula: '',
                    nombre: maestro.nombre,
                    carrera: 'Docencia',
                    rol: 'profesor' 
                }
            });
        }

      
        return res.status(401).json({ status: 'error', message: 'Las credenciales son incorrectas o el usuario no existe.' });

    } catch (error) {
        console.error('Error en el servidor:', error);
        return res.status(500).json({ status: 'error', message: 'Error interno en el servidor de base de datos' });
    }
};

module.exports = {
    login
};