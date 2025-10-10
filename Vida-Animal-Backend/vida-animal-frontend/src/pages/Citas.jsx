// src/pages/Citas.jsx
import React from 'react';
import FormularioCitas from '../components/FormularioCitas';
import ListaCitas from '../components/ListaCitas';

function Citas() {
  return (
    <div>
      <h1>Página de Citas</h1>
      <FormularioCitas />
      <ListaCitas />
    </div>
  );
}

export default Citas;
