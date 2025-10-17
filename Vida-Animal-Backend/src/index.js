require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const verificarToken = require('./middleware/verificarToken');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ✅ Ruta para guardar una cita
app.post('/api/citas', (req, res) => {
  const { nombre, fecha, motivo } = req.body;
  console.log("📦 POST /api/citas:", req.body);

  if (!nombre || !fecha || !motivo) {
    return res.status(400).json({ error: 'Faltan datos' });
  }

  const query = 'INSERT INTO citas (nombre, fecha, motivo) VALUES (?, ?, ?)';
  db.query(query, [nombre, fecha, motivo], (err, result) => {
    if (err) {
      console.error('❌ Error al guardar cita:', err.sqlMessage || err.message || err);
      return res.status(500).json({ error: 'Error al guardar cita', detalle: err.sqlMessage });
    }
    res.status(201).json({ mensaje: 'Cita guardada correctamente', id: result.insertId });
  });
});

// ✅ Ruta para mostrar todas las citas
app.get('/api/citas', (req, res) => {
  db.query('SELECT * FROM citas', (err, results) => {
    if (err) {
      console.error('❌ Error al obtener citas:', err.sqlMessage || err.message || err);
      return res.status(500).json({ error: 'Error al obtener citas', detalle: err.sqlMessage });
    }
    res.json(results);
  });
});

// ✅ Ruta para registrar mascota
app.post('/api/mascotas', (req, res) => {
  const { nombre, especie, edad } = req.body;
  console.log("📦 POST /api/mascotas:", req.body);

  if (!nombre || !especie || !edad) {
    return res.status(400).json({ error: 'Faltan datos' });
  }

  const query = 'INSERT INTO mascotas (nombre, especie, edad) VALUES (?, ?, ?)';
  db.query(query, [nombre, especie, edad], (err, result) => {
    if (err) {
      console.error('❌ Error al guardar mascota:', err.sqlMessage || err.message || err);
      return res.status(500).json({ error: 'Error al guardar mascota', detalle: err.sqlMessage });
    }
    res.status(201).json({ mensaje: 'Mascota registrada correctamente', id: result.insertId });
  });
});

app.post('/api/contactos', (req, res) => {
  const { nombre, email, asunto, mensaje } = req.body;
  console.log("📦 POST /api/contactos:", req.body);

  if (!nombre || !email || !asunto || !mensaje) {
    return res.status(400).json({ error: 'Faltan datos' });
  }

  const query = 'INSERT INTO contactos (nombre, email, asunto, mensaje) VALUES (?, ?, ?, ?)';
  db.query(query, [nombre, email, asunto, mensaje], (err, result) => {
    if (err) {
      console.error('❌ Error al guardar contacto:', err.sqlMessage || err.message || err);
      return res.status(500).json({ error: 'Error al guardar contacto', detalle: err.sqlMessage });
    }
    res.status(201).json({ mensaje: 'Contacto registrado correctamente', id: result.insertId });
  });
});


app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
const jwt = require('jsonwebtoken');

// ✅ Ruta para login y generación de token
app.post('/api/login', (req, res) => {
  const { correo } = req.body;
  console.log("🔐 POST /api/login:", req.body);

  if (!correo) {
    return res.status(400).json({ error: 'Correo requerido' });
  }

  const query = 'SELECT * FROM usuarios WHERE correo = ?';
  db.query(query, [correo], (err, resultados) => {
    if (err) {
      console.error('❌ Error en login:', err.sqlMessage || err.message || err);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }

    if (resultados.length === 0) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    const token = jwt.sign({ correo }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ mensaje: 'Login exitoso', token });
  });
});
