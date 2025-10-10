require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const usuariosRoutes = require('./routes/usuarios.routes.js');

const app = express();
const PORT = process.env.PORT || 3001;

// 🛡️ Middleware
app.use(cors());
app.use(express.json());

// 👤 Ruta de usuarios
app.use('/api/usuarios', usuariosRoutes);

// 📅 Ruta para guardar una cita
app.post('/api/citas', (req, res) => {
  const { nombre, fecha, motivo } = req.body;

  const query = 'INSERT INTO citas (nombre, fecha, motivo) VALUES (?, ?, ?)';
  db.query(query, [nombre, fecha, motivo], (err, result) => {
    if (err) {
      console.error('Error al guardar cita:', err);
      return res.status(500).json({ error: 'Error al guardar cita' });
    }
    res.status(201).json({ mensaje: 'Cita guardada correctamente', id: result.insertId });
  });
});

// 📋 Ruta para mostrar todas las citas
app.get('/api/citas', (req, res) => {
  db.query('SELECT * FROM citas', (err, results) => {
    if (err) {
      console.error('Error al obtener citas:', err);
      return res.status(500).json({ error: 'Error al obtener citas' });
    }
    res.json(results);
  });
});

// 🐾 Ruta para mostrar servicios
app.get('/api/servicios', (req, res) => {
  db.query('SELECT * FROM servicios', (err, results) => {
    if (err) {
      console.error('Error al obtener servicios:', err);
      return res.status(500).json({ error: 'Error al obtener servicios' });
    }
    res.json(results);
  });
});

// 🐶 Ruta para mostrar mascotas
app.get('/api/mascotas', (req, res) => {
  db.query('SELECT * FROM mascotas', (err, results) => {
    if (err) {
      console.error('Error al obtener mascotas:', err);
      return res.status(500).json({ error: 'Error al obtener mascotas' });
    }
    res.json(results);
  });
});

// 📨 Ruta para guardar contacto en la base de datos vida_animal.contactos
app.post('/api/contacto', (req, res) => {
  const { nombre, email, mensaje } = req.body;

  const query = 'INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)';
  db.query(query, [nombre, email, mensaje], (err, result) => {
    if (err) {
      console.error('❌ Error al guardar contacto:', err);
      return res.status(500).json({ error: 'Error al guardar contacto' });
    }
    res.status(201).json({
      mensaje: 'Contacto guardado correctamente',
      id: result.insertId
    });
  });
});

// 🌐 Ruta raíz
app.get('/', (req, res) => {
  res.send('Bienvenido al backend de Veterinaria Vida Animal');
});

// 🚀 Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
