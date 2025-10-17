import React from 'react';
import RegistroMascota from '../components/RegistroMascota';

function Mascotas() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ color: '#6a1b9a' }}>
  🐶🐱 Registro de Mascotas
</h1>

      <p>Consulta y registra mascotas en nuestra veterinaria.</p>

      {/* Formulario para registrar nueva mascota */}
      <RegistroMascota />

      {/* Aquí puedes mantener la lista de mascotas si ya la tienes */}
      {/* <ListaMascotas /> */}
    </div>
  );
}

export default Mascotas;
