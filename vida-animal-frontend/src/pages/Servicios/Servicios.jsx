import './Servicios.css';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.jpg';
import logo3 from '../../assets/logo3.jpg';

function Servicios() {
  const servicios = [
    {
      id: 1,
      nombre: 'Consulta general',
      descripcion: 'Evaluación médica básica',
      precio: 70.0
    },
    {
      id: 2,
      nombre: 'Vacunación',
      descripcion: 'Aplicación de vacunas para mascotas',
      precio: 50.0
    },
    {
      id: 3,
      nombre: 'Terapia física',
      descripcion: 'Rehabilitación para movilidad',
      precio: 60.0
    }
  ];

  const imagenes = [logo1, logo2, logo3];

  return (
    <div className="servicios-container">
      <h1>Servicios Veterinarios 🐾</h1>
      <p>Tu mascota merece lo mejor. Estos son nuestros servicios disponibles:</p>

      <div className="servicios-grid">
        {servicios.map((servicio, index) => (
          <div key={servicio.id} className="servicio-card">
            <img
              src={imagenes[index % imagenes.length]}
              alt={servicio.nombre}
              className="servicio-img"
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

