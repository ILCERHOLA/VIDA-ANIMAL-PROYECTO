import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0 }}>
        <li><Link to="/" className="nav-link">Inicio</Link></li>
        <li><Link to="/servicios" className="nav-link">Servicios</Link></li>
        <li><Link to="/citas" className="nav-link">Agendar Cita</Link></li>
        <li><Link to="/mascotas" className="nav-link">Mascotas</Link></li>
        <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
