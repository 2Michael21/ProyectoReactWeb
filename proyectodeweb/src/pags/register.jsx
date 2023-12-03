import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import flech from "../img/flecha_ret.png";
import '../styles/register.css';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cd, setCd] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [facultad, setFacultad] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = {
      nombre,
      apellido,
      cd,
      correo,
      contrasena,
      facultad,
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
  }, [nombre, apellido, cd, correo, contrasena, facultad]);

  const validarRegistro = () => {
    // Validación de campos (puedes personalizar estas validaciones)
    if (nombre.trim() === "" || apellido.trim() === "" || cd.trim() === "" || correo.trim() === "" || contrasena.trim() === "" || confirmarContrasena.trim() === "" || facultad === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }

    if (contrasena !== confirmarContrasena) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    if (!/^\d{10}$/.test(cd)) {
      alert("La cédula debe contener 10 dígitos numéricos.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(correo)) {
      alert("El correo electrónico no es válido.");
      return;
    }

    // Si llegamos aquí, todos los campos están completados correctamente
    alert("Registro exitoso. Redirigiendo al inicio de sesión.");
    navigate('/login'); // Utilizamos useNavigate para la redirección
  };

  

  return (
    <div>
      <main>
        <section className="registro">
          <button className="boton-retroceso" onClick={() => window.history.back()}>
            <img src={flech} alt="Retroceder" />
          </button>
          <h1>Registro de Usuario</h1>

          <form id="registro-form" onSubmit={validarRegistro}>
            <label htmlFor="nombre">Nombres:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />

            <label htmlFor="apellido">Apellidos:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />

            <label htmlFor="cd">Cédula:</label>
            <input
              type="text"
              id="cd"
              name="cd"
              value={cd}
              onChange={(e) => setCd(e.target.value)}
              required
            />

            <label htmlFor="correo">Correo electrónico:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />

<label htmlFor="contrasena">Contraseña:</label>
<input
  type="password"
  id="contrasena"
  name="contrasena"
  value={contrasena}
  onChange={(e) => setContrasena(e.target.value)}
  autoComplete="new-password" // Puedes ajustar esto según sea necesario
  required
/>

<label htmlFor="confirmar-contrasena">Confirmar contraseña:</label>
<input
  type="password"
  id="confirmar-contrasena"
  name="confirmar-contrasena"
  value={confirmarContrasena}
  onChange={(e) => setConfirmarContrasena(e.target.value)}
  autoComplete="new-password" // Puedes ajustar esto según sea necesario
  required
/>



            <label htmlFor="facultad">Facultad:</label>
            <select
              id="facultad"
              name="facultad"
              value={facultad}
              onChange={(e) => setFacultad(e.target.value)}
              required
            >
              <option value="">Seleccione la facultad a la que pertenece</option>
              <option value="facultad1">Facultad de informatica</option>
              <option value="facultad2">Facultad de arquitectura</option>
              <option value="facultad3">Facultad medicina</option>
            </select>

            <div className="botones-container">
              <Link to="/login" className="boton-log">
                Iniciar Sesión
              </Link>

              <button type="submit" className="boton-log">
                Registrarse
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Registro;
