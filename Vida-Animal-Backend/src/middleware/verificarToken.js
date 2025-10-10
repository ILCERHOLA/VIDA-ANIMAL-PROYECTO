const admin = require('../services/firebase.config');

const verificarToken = async (req, res, next) => {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) return res.status(401).send({ error: 'Token no proporcionado' });

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Token inválido o expirado' });
  }
};

module.exports = verificarToken;
