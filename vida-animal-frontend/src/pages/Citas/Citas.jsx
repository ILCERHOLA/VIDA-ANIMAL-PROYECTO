import React from 'react';
import './Citas.css';
import FormularioCitas from '../../components/Citas/FormularioCitas';
import ListaCitas from '../../components/Citas/ListaCitas';


function Citas() {
  return (
    <div className="citas-container">
      <h1>Página de Citas 🐾</h1>
      <p className="descripcion">
        Agenda una cita para tu mascota de forma rápida y segura. Completa el formulario y revisa las citas registradas.
      </p>
      <p className="nota">
        * Recomendamos agendar con al menos 24 horas de anticipación.
      </p>

      <section className="citas-seccion">
        
        <FormularioCitas />
      </section>

      <section className="citas-seccion">
        
        <ListaCitas />
      </section>

      
    </div>
  );
}

export default Citas;
