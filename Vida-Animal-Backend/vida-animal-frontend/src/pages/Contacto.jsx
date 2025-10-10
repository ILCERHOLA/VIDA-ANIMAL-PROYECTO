import { useState } from 'react';
import api from '../axiosConfig'; // Asegúrate de tener este archivo configurado

function Contacto() {
  const [mensaje, setMensaje] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    contenido: ''
  });

  const manejarCambio = (e) => {
    setMensaje({ ...mensaje, [e.target.name]: e.target.value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/api/contacto', {
        nombre: mensaje.nombre,
        email: mensaje.correo,
        asunto: mensaje.asunto,
        mensaje: mensaje.contenido
      });
      console.log('Respuesta del backend:', res.data);
      alert('Mensaje enviado con éxito');
      setMensaje({ nombre: '', correo: '', asunto: '', contenido: '' });
    } catch (error) {
      console.error('Error al conectar con el backend:', error);
      alert('Hubo un problema al enviar el mensaje');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contacto</h1>
      <form onSubmit={manejarEnvio}>
        <label>Nombre:</label><br />
        <input type="text" name="nombre" value={mensaje.nombre} onChange={manejarCambio} required /><br />

        <label>Correo electrónico:</label><br />
        <input type="email" name="correo" value={mensaje.correo} onChange={manejarCambio} required /><br />

        <label>Asunto:</label><br />
        <input type="text" name="asunto" value={mensaje.asunto} onChange={manejarCambio} required /><br />

        <label>Mensaje:</label><br />
        <textarea name="contenido" value={mensaje.contenido} onChange={manejarCambio} required></textarea><br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
