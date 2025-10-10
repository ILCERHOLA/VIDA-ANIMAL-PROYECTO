// src/components/FormularioCitas.jsx
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function FormularioCitas() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${API_URL}/api/citas`, {
      nombre,
      fecha,
      motivo
    })
      .then(res => {
        console.log("Respuesta del backend:", res.data);
        alert("✅ Cita registrada correctamente");
        setNombre('');
        setFecha('');
        setMotivo('');
      })
      .catch(err => {
        console.error("Error al enviar cita:", err);
        alert("❌ Hubo un error al registrar la cita");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Cita</h2>
      <input
        type="text"
        placeholder="Nombre de la mascota"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Motivo de la cita"
        value={motivo}
        onChange={(e) => setMotivo(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioCitas;

