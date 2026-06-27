const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// MIDDLEWARES GLOBALES
app.use(cors()); // Permite que tu Angular del puerto 4200 consuma esta API de forma segura
app.use(express.json()); // Habilita a Node para leer datos en formato JSON (como req.body)

// RUTA DE PRUEBA DE ESTADO
app.get('/api/status', (req, res) => {
    res.json({ status: 'success', message: 'Servidor de SINCEA corriendo perfectamente' });
});

// NUESTRA RUTA DE AUTENTICACIÓN (La programaremos en el Paso 4)
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/profesores', require('./routes/profesor.routes'));
app.use('/api/edificios', require('./routes/edificio.routes'));

// ARRANCAR EL SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor backend de SINCEA corriendo en http://localhost:${PORT}`);
});