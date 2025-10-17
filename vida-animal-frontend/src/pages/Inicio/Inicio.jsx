import React from 'react';
import './Inicio.css';

import consultaImg from '../../assets/consulta.jpg';
import vacunacionImg from '../../assets/vacunacion.webp';
import terapiaImg from '../../assets/terapia.jpg';

function Inicio() {
  return (
    <div className="inicio-container">
      {/* Misión y Visión */}
      <section className="bienvenida">
        <h1>Bienvenido a Veterinaria Vida Animal 🐾</h1>
        <p><strong>Misión:</strong> Brindar atención médica y bienestar animal con profesionalismo y cariño.</p>
        <p><strong>Visión:</strong> Ser la veterinaria líder en servicios digitales y atención personalizada en nuestra comunidad.</p>
      </section>

      {/* Servicios destacados */}
      <section className="servicios-destacados">
        <h2>Servicios Destacados</h2>
        <div className="servicios-grid">
          <div className="servicio">
            <img src={consultaImg} alt="Consulta médica" />
            <p>Consulta médica</p>
          </div>
          <div className="servicio">
            <img src={vacunacionImg} alt="Vacunación" />
            <p>Vacunación</p>
          </div>
          <div className="servicio">
            <img src={terapiaImg} alt="Terapia física" />
            <p>Terapia física</p>
          </div>
        </div>
      </section>

      {/* Accesos rápidos */}
      <section className="accesos-rapidos">
        <h2>Accesos Rápidos</h2>
        <div className="botones-acceso">
          <button onClick={() => window.location.href = '/citas'}>Agendar Cita</button>
          <button onClick={() => window.location.href = '/contacto'}>Contacto</button>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
