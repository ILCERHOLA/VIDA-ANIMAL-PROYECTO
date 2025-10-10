const express = require('express');
const router = express.Router();
const db = require('../config/db');

// 🔍 Obtener todos los usuarios
router.get('/', (req, res) => {
  const query = 'SELECT id, nombre, correo, rol, fecha_registro FROM usuarios';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener usuarios:', err);
      return res.status(500).json({ error: 'Error al obtener usuarios' });
    }
    res.json(results);
  });
});

// 🔍 Obtener usuario por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT id, nombre, correo, rol, fecha_registro FROM usuarios WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error al buscar usuario:', err);
      return res.status(500).json({ error: 'Error al buscar usuario' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(results[0]);
  });
});

module.exports = router;
