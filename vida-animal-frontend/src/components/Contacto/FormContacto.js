import React, { useState } from 'react';
import axios from 'axios';

function FormularioContacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!nombre || !correo || !asunto || !mensaje) {
      alert("❌ Todos los campos son obligatorios");
      return;
    }

    // Aquí colocas tu axios.post
    axios.post('http://localhost:3001/api/contactos', {
      nombre,
      correo,
      asunto,
      mensaje
    })
    .then(res => {
      alert("✅ Contacto registrado correctamente");
      setNombre('');
      setCorreo('');
      setAsunto('');
      setMensaje('');
    })
    .catch(err => {
      alert("❌ Error al registrar el contacto");
      console.error("Error:", err.response?.data?.detalle || err.message);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario de Contacto</h2>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      <input type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
      <input type="text" placeholder="Asunto" value={asunto} onChange={(e) => setAsunto(e.target.value)} required />
      <textarea placeholder="Mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioContacto;
