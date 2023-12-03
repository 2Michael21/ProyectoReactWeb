import React, { useState } from 'react';
import Logo from "../img/Logo.png";
import userlog from "../img/user_logo.png";
import "../styles/creardoc.css";
import { NavLink } from 'react-router-dom';
import Perfil from './perfil';

const Creardocs = () => {
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipoNombre, setTipoNombre]= useState('');
  const [perfilModalOpen, setPerfilModalOpen] = useState(false);
  
  const togglePergilModal = () => {
    setPerfilModalOpen(!perfilModalOpen);
  };

  const handleFileUpload = () => {
    if (!tipoDocumento) {
      alert('Por favor, seleccione un tipo de documento.');
      return;
    }

    const storedDocumentos = JSON.parse(localStorage.getItem('documentos')) || [];

    const nuevoDocumento = {
      id: Date.now(),
      nombre: tipoNombre,
      tipo: tipoDocumento,
      descripcion: descripcion,
    };

    const nuevosDocumentos = [...storedDocumentos, nuevoDocumento];
    localStorage.setItem('documentos', JSON.stringify(nuevosDocumentos));

    setTipoNombre('');
    setTipoDocumento('');
    setDescripcion('');

    console.log('Información del documento:', nuevoDocumento);
  };

  return (
    <div className='card'>
      <header>
        <div className="logo">
          <NavLink to='/pag1'><img src={Logo} alt="Logo" /></NavLink>
        </div>
        <section className="banner">
          <h1>Publicaciones Académicas</h1>
        </section>
        <div className="user-dropdown">
          <button className="dropbtn">
            <img className="user_logo" src={userlog} alt="User Logo" />
          </button>
          <div className="dropdown-content">
            <a onClick={togglePergilModal}>Perfil</a>
            <NavLink to='/docs'>Mis publicaciones</NavLink>
            <NavLink to='/'>Cerrar Sesión</NavLink>
          </div>
          {perfilModalOpen && <Perfil closeModal={() => setPerfilModalOpen(false)} />}

        </div>
      </header>
      <main>
        <center><h2>Ingrese la información del documento</h2></center>
        <div className="cuadro-sombreado">
          <form>
            <label htmlFor='tipoNombre'>Nombre del documeto:</label>
            <input 
            type="text" 
            name="nombre" 
            value={tipoNombre}
            onChange={(e)=> setTipoNombre(e.target.value)}
            required
            />
            <label htmlFor="tipoDocumento">Tipo de documento:</label><br />
            <select
              id="tipoDocumento"
              name="tipoDocumento"
              value={tipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
              required
            >
              <option value="">Seleccione...</option>
              <option value="Tesis">Tesis</option>
              <option value="Revista">Revistas</option>
              <option value="Documento">Documento Cientifico</option>
            </select><br />

            <label htmlFor="descripcion">Descripción:</label><br />
            <textarea
              id="descripcion"
              name="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            ></textarea><br />
            
            <section className='busqueda'>
              <button type="button" onClick={handleFileUpload}>Guardar Información</button>
            </section>
          </form>
        </div>
      </main>
      <footer>
        <div className="pie">
          <p>Todos los derechos reservados &copy; Michael Castro 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Creardocs;
