import { useState } from 'react';
import axios from 'axios';

function RegistroMascota() {
  const [nombre, setNombre] = useState('');
  const [especie, setEspecie] = useState('');
  const [raza, setRaza] = useState('');
  const [edad, setEdad] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaMascota = { nombre, especie, raza, edad, descripcion };

    axios.post('http://localhost:3001/api/mascotas', nuevaMascota)
      .then(res => {
        alert('✅ Mascota registrada correctamente');
        setNombre('');
        setEspecie('');
        setRaza('');
        setEdad('');
        setDescripcion('');
      })
      .catch(err => {
        console.error('Error al registrar mascota:', err.response?.data || err.message);
        alert('❌ Error al registrar mascota');
      });
  };

  // 🎨 Estilos personalizados
  const formStyle = {
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '2rem',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: '1px solid #bbb',
    fontSize: '1rem',
    outlineColor: '#6a1b9a' // Color púrpura al enfocar
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#6a1b9a', // Botón púrpura
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#6a1b9a' }}>
        🐶 Registro de Mascotas
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#6a1b9a' }}>
        Consulta y registra mascotas de manera sencilla
      </p>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={inputStyle}
        required
      />
      <input
        type="text"
        placeholder="Especie"
        value={especie}
        onChange={(e) => setEspecie(e.target.value)}
        style={inputStyle}
        required
      />
      <input
        type="text"
        placeholder="Raza"
        value={raza}
        onChange={(e) => setRaza(e.target.value)}
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        style={inputStyle}
        required
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        rows={3}
        style={{ ...inputStyle, resize: 'vertical' }}
      />
      <button type="submit" style={buttonStyle}>Registrar Mascota</button>
    </form>
  );
}

export default RegistroMascota;
