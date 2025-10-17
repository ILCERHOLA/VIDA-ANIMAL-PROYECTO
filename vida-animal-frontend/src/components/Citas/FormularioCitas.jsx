import React, { useState } from 'react';
import axios from 'axios';

function FormularioCitas() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/api/citas', { nombre, fecha, motivo })
      .then(res => {
        alert("✅ Cita registrada correctamente");
        setNombre('');
        setFecha('');
        setMotivo('');
      })
      .catch(err => {
        alert("❌ Error al registrar la cita");
        console.error("Error:", err.response?.data?.detalle || err.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Cita</h2>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
      <input type="text" placeholder="Motivo" value={motivo} onChange={(e) => setMotivo(e.target.value)} required />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioCitas;
