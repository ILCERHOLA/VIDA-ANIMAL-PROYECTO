const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todas las mascotas
router.get('/', (req, res) => {
  db.query('SELECT * FROM mascotas', (err, results) => {
    if (err) {
      console.error('Error al obtener mascotas:', err);
      return res.status(500).json({ error: 'Error al obtener mascotas' });
    }
    res.json(results);
  });
});

// Agregar una nueva mascota
router.post('/', (req, res) => {
  const { nombre, tipo, edad, descripcion } = req.body;
  db.query(
    'INSERT INTO mascotas (nombre, tipo, edad, descripcion) VALUES (?, ?, ?, ?)',
    [nombre, tipo, edad, descripcion],
    (err, result) => {
      if (err) {
        console.error('Error al agregar mascota:', err);
        return res.status(500).json({ error: 'Error al agregar mascota' });
      }
      res.json({ id: result.insertId, nombre, tipo, edad, descripcion });
    }
  );
});

module.exports = router;
