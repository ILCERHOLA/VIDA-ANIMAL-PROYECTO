import { useEffect, useState } from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.jpg';
import logo3 from '../assets/logo3.jpg';

function Servicios() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/servicios')
      .then(res => res.json())
      .then(data => setServicios(data))
      .catch(err => console.error('Error al cargar servicios:', err));
  }, []);

  // Asignar imágenes manualmente según el índice
  const imagenes = [logo1, logo2, logo3];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Servicios Veterinarios 🐾</h1>
      <p>Tu mascota merece lo mejor. Estos son nuestros servicios disponibles:</p>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {servicios.map((servicio, index) => (
          <div key={servicio.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '300px' }}>
            <img
              src={imagenes[index % imagenes.length]}
              alt={servicio.nombre}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h3>{servicio.nombre}</h3>
            <p>{servicio.descripcion}</p>
            <p><strong>Precio:</strong> S/ {servicio.precio.toFixed(2)}</p>
            <button onClick={() => window.location.href = '/citas'}>Agendar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;

