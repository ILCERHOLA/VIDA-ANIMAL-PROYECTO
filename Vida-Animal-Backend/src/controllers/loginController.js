const jwt = require('jsonwebtoken');
const conexion = require('../database/db'); // ajusta si tu conexión está en otro archivo

exports.login = (req, res) => {
  const { correo } = req.body;

  if (!correo) {
    return res.status(400).json({ error: 'Correo requerido' });
  }

  conexion.query('SELECT * FROM usuarios WHERE correo = ?', [correo], (err, resultados) => {
    if (err) return res.status(500).json({ error: 'Error en la base de datos' });

    if (resultados.length === 0) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    const token = jwt.sign({ correo }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ mensaje: 'Login exitoso', token });
  });
};
