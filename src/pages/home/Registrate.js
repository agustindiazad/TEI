import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/index';
import Sidebar from '../../Components/Sidebar/index';
import Footer from '../../Components/Footer/index';
import './Registrate.css';

function Registrate() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    nacionalidad: '',
    inicioRuta: '',
    finRuta: '',
    imagenes: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    setFormData((prevData) => ({ ...prevData, imagenes: files }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor.
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="Registrate">
      <div className="Registrate-body">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />

        <div className="Registrate-form">
          <h2>Regístrate</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />

            <label htmlFor="edad">Edad:</label>
            <input
              type="text"
              id="edad"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
            />

            <label htmlFor="nacionalidad">Nacionalidad:</label>
            <input
              type="text"
              id="nacionalidad"
              name="nacionalidad"
              value={formData.nacionalidad}
              onChange={handleChange}
            />

            <label htmlFor="inicioRuta">Inicio de ruta:</label>
            <input
              type="text"
              id="inicioRuta"
              name="inicioRuta"
              value={formData.inicioRuta}
              onChange={handleChange}
            />

            <label htmlFor="finRuta">Fin de ruta:</label>
            <input
              type="text"
              id="finRuta"
              name="finRuta"
              value={formData.finRuta}
              onChange={handleChange}
            />

            <label htmlFor="imagenes">Subir imágenes:</label>
            <input
              type="file"
              id="imagenes"
              name="imagenes"
              multiple
              onChange={handleImageUpload}
            />

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Registrate;
