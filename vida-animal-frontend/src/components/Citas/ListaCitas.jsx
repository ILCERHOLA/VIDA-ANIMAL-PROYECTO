import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListaCitas() {
  const [citas, setCitas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/citas')
      .then(res => {
        setCitas(res.data);
        setError(null);
      })
      .catch(err => {
        const mensaje = err.response?.data?.detalle || err.message;
        setError(mensaje);
        console.error("❌ Error al cargar citas:", mensaje);
      });
  }, []);

  return (
    <div>
      <h2>Citas Registradas</h2>
      {error ? (
        <p style={{ color: 'red' }}>❌ Error: {error}</p>
      ) : citas.length > 0 ? (
        <ul>
          {citas.map(cita => (
            <li key={cita.id}>
              {cita.nombre} - {cita.fecha} - {cita.motivo}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay citas registradas.</p>
      )}
    </div>
  );
}

export default ListaCitas;
