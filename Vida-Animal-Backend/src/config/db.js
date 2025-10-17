require('dotenv').config();
const mysql = require('mysql');

console.log('Intentando conectar a la base:', process.env.DB_NAME);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar con MySQL:', err.message);
  } else {
    console.log('✅ Conectado a MySQL');
  }
});

module.exports = db;
