const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(cors()); 
app.use(express.json()); 
app.use(express.static('public'));

app.get('/api/status', (req, res) => {
    res.json({ status: 'success', message: 'Servidor de SINCEA corriendo perfectamente' });
});


app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/profesores', require('./routes/profesor.routes'));
app.use('/api/edificios', require('./routes/edificio.routes'));
app.use('/api/horarios', require('./routes/horario.routes'));


app.listen(PORT, () => {
    console.log(`Servidor backend de SINCEA corriendo en http://localhost:${PORT}`);
});