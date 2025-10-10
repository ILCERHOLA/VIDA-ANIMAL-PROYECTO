import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Mascotas() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/mascotas`)
      .then(response => {
        console.log('API URL:', process.env.REACT_APP_API_URL);

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

      {mascotas.length === 0 ? (
        <p>No hay mascotas registradas.</p>
      ) : (
        <ul>
          {mascotas.map(mascota => (
            <li key={mascota.id}>
              <strong>{mascota.nombre}</strong> - {mascota.tipo} ({mascota.edad} años)
              {mascota.descripcion && (
                <div style={{ fontStyle: 'italic', color: '#555' }}>
                  {mascota.descripcion}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Mascotas;
