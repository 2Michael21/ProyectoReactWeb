// src/App.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/pag1.css';
import Logo from '../img/Logo.png';
import userlog from '../img/user_logo.png';
import Perfil from './perfil';

function Pag1() {
  const [perfilModalOpen, setPerfilModalOpen] = useState(false);
  const [documentos, setDocumentos] = useState([]);

  const toggleDropdown = () => {
    const dropdownOptions = document.getElementById('dropdown-options');
    dropdownOptions.classList.toggle('show');
  };

  const togglePergilModal = () => {
    setPerfilModalOpen(!perfilModalOpen);
  };

  useEffect(() => {
    // Obtener documentos almacenados en localStorage
    const storedDocumentos = JSON.parse(localStorage.getItem('documentos')) || [];
    setDocumentos(storedDocumentos);
  }, []);

  const actualizarCuadro = (tipo, documentos) => {
    return (
      <div id={`cuadro-${tipo}`} className="cuadro-blanco">
        <ul>
          {documentos.map((documento) => (
            <li key={documento.id} className={`busqueda ${tipo.toLowerCase()}`}>
              <Link to=""><h3>{documento.nombre}</h3></Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="card">
      <header>
        <div className="logo">
          <NavLink to="/pag1">
            <img src={Logo} alt="Logo" />
          </NavLink>
        </div>
        <section className="banner">
          <h1>Publicaciones Académicas</h1>
        </section>
        <div className="user-dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            <img className="user_logo" src={userlog} alt="User Logo" />
          </button>
          <div className="dropdown-content" id="dropdown-options">
            <a onClick={togglePergilModal}>Perfil</a>
            <NavLink to="/docs">Mis publicaciones</NavLink>
            <NavLink to="/">Cerrar Sesión</NavLink>
          </div>
          {perfilModalOpen && <Perfil closeModal={() => setPerfilModalOpen(false)} />}
        </div>
      </header>

      <main>
        <div className="separador">
          <div className="columna">
            <div className="contenido-columna">
              <p>Revistas</p>
            </div>
            {actualizarCuadro('Revista', documentos.filter((documento) => documento.tipo === 'Revista'))}
          </div>
          <div className="columna">
            <div className="contenido-columna">
              <p>Documentos Científicos</p>
            </div>
            {actualizarCuadro('Documento', documentos.filter((documento) => documento.tipo === 'Documento'))}
          </div>
          <div className="columna">
            <div className="contenido-columna">
              <p>Tesis</p>
            </div>
            {actualizarCuadro('Tesis', documentos.filter((documento) => documento.tipo === 'Tesis'))}
          </div>
        </div>
      </main>

      <footer>
        <div className="pie">
          <p>Todos los derechos reservados &copy; Michael Castro 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default Pag1;
