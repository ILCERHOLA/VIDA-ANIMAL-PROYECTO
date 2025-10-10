const db = require('../config/db.config');

// Funciones para interactuar con la tabla 'usuarios'
const Usuario = {
  crear: (datos, callback) => {
    const sql = 'INSERT INTO usuarios SET ?';
    db.query(sql, datos, callback);
  },

  listar: (callback) => {
    const sql = 'SELECT * FROM usuarios';
    db.query(sql, callback);
  }
};

module.exports = Usuario;
