import { useState } from 'react';
import axios from 'axios';

function Contacto() {
  const [mensaje, setMensaje] = useState({
    nombre: '',
    email: '',
    asunto: '',
    contenido: ''
  });

  const manejarCambio = (e) => {
    setMensaje({ ...mensaje, [e.target.name]: e.target.value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/contactos', {
        nombre: mensaje.nombre,
        email: mensaje.email,
        asunto: mensaje.asunto,
        mensaje: mensaje.contenido
      });
      console.log('✅ Respuesta del backend:', res.data);
      alert('✅ Mensaje enviado con éxito');
      setMensaje({ nombre: '', email: '', asunto: '', contenido: '' });
    } catch (error) {
      console.error('❌ Error al conectar con el backend:', error.response?.data?.detalle || error.message);
      alert('❌ Hubo un problema al enviar el mensaje');
    }
  };

  // 🎨 Estilos institucionales
  const containerStyle = {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  };

  const tituloStyle = {
    color: '#6a1b9a',
    textAlign: 'center',
    marginBottom: '0.5rem',
    fontSize: '1.8rem'
  };

  const subtituloStyle = {
    color: '#6a1b9a',
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '1rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: '1px solid #bbb',
    fontSize: '1rem',
    outlineColor: '#6a1b9a'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#6a1b9a',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer'
  };

  const footerStyle = {
    textAlign: 'center',
    marginTop: '2rem',
    color: '#333',
    fontSize: '0.9rem'
  };

  return (
    <div style={containerStyle}>
      <h2 style={tituloStyle}>📞 Contacto</h2>
      <p style={subtituloStyle}>
        Comunícate con nosotros para consultas, dudas o emergencias.
      </p>

      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={mensaje.nombre}
          onChange={manejarCambio}
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={mensaje.email}
          onChange={manejarCambio}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="asunto"
          placeholder="Asunto"
          value={mensaje.asunto}
          onChange={manejarCambio}
          required
          style={inputStyle}
        />
        <textarea
          name="contenido"
          placeholder="Mensaje"
          value={mensaje.contenido}
          onChange={manejarCambio}
          required
          rows={4}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
        <button type="submit" style={buttonStyle}>Enviar mensaje</button>
      </form>

      <div style={footerStyle}>
        <p><strong>Veterinaria Vida Animal</strong></p>
        <p>Av. Siempre Viva 123, Lima</p>
        <p>Teléfono: (01) 234-5678</p>
        <p>Email: contacto@vidaanimal.com</p>
        <p>Horario: Lunes a sábado, 9:00 a.m. – 6:00 p.m.</p>
        <p>© 2025 Veterinaria Vida Animal. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

export default Contacto;
