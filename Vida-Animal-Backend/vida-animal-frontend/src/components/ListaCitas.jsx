import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const ListaCitas = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/citas`)
      .then(res => {
        setCitas(res.data);
        console.log("Citas cargadas:", res.data);
      })
      .catch(err => {
        console.error("Error al cargar citas:", err);
        alert("❌ No se pudieron cargar las citas");
      });
  }, []);

  return (
    <div>
      <h2>Citas Registradas</h2>
      {citas.length > 0 ? (
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
};

export default ListaCitas;
