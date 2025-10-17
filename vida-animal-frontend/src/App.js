import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio/Inicio';
import Servicios from './pages/Servicios/Servicios';
import Citas from './pages/Citas/Citas';
import Mascotas from './pages/Mascotas';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/mascotas" element={<Mascotas />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
