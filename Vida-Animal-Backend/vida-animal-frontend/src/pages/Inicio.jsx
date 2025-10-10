import { useEffect, useState } from 'react';

function Inicio() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/usuarios')
      .then(res => res.json())
      .then(data => {
        console.log('Usuarios:', data);
        setUsuarios(data);
      })
      .catch(err => {
        console.error('Error al conectar con el backend:', err);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bienvenido a Veterinaria Vida Animal 🐾</h1>
      <p>Nos dedicamos al cuidado integral de tus mascotas.</p>
      <p>Ofrecemos servicios médicos, estéticos y de bienestar animal.</p>

      <h3>Usuarios registrados:</h3>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>{usuario.nombre}</li>
        ))}
      </ul>

      <button onClick={() => window.location.href = '/citas'}>Agendar Cita</button>
      <button onClick={() => window.location.href = '/contacto'}>Contacto</button>
    </div>
  );
}

export default Inicio;

