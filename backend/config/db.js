const mysql = require('mysql2/promise'); // Usamos la versión de Promesas para usar async/await

// Configuración del Pool de conexiones para mayor rendimiento
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Tu contraseña de phpMyAdmin
    database: 'sincea', // El nombre de tu Base de Datos
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;