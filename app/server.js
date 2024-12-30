const express = require('express');
const path = require('path');

const app = express();

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta por defecto para redirigir al login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/auth/login.html'));
});

// Ruta para manejar archivos no encontrados
app.use((req, res) => {
    res.status(404).send('Archivo no encontrado');
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
