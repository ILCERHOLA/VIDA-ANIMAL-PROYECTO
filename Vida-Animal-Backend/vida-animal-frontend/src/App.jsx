import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Mascotas() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/mascotas`)
      .then(response => {
        console.log('Mascotas recibidas:', response.data);
        setMascotas(response.data);
      })
      .catch(error => {
        console.error('Error al cargar mascotas:', error);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Información de Mascotas</h1>
      <p>Consulta y actualiza los datos de tus mascotas registradas.</p>

      <ul>
        {mascotas.map(mascota => (
          <li key={mascota.id}>
            <strong>{mascota.nombre}</strong> - {mascota.tipo} ({mascota.edad} años)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Mascotas;
