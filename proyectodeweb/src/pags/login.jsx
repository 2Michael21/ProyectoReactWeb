import React, { useState } from "react";
import flech from "../img/flecha_ret.png";
import { Link, useNavigate } from "react-router-dom";
import '../styles/login.css';

function Login() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const usuarioRegistrado = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioRegistrado && usuarioRegistrado.correo === correo && usuarioRegistrado.contrasena === contrasena) {
      // Las credenciales son válidas, puedes redirigir a la página de perfil o hacer lo que necesites

      alert('Inicio de sesión exitoso')
      navigate('/pag1'); // Redirige a la página que desees
    } else {
      // Credenciales incorrectas
      alert('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <main>
      <section className="login">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <Link to="/" className="boton-retroceso">
            <img src={flech} alt="Flecha de retroceso" />
          </Link>

          <label htmlFor="correo">Correo:</label>
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
            required
          />

          <div>
            <button type="submit" className="boton-login">Iniciar Sesión</button>
          </div>

        </form>
        <p>
          ¿No tienes una cuenta?<Link to="/register">Regístrate aquí</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
