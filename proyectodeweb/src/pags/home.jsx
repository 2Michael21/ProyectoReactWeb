// En home.js
import '../styles/home.css';
import logo from '../img/Logo.png';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className='card'>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <section>
          <h1>Publicaciones Académicas</h1>
        </section>
        <nav>
          
            < NavLink to='/login' className='boton'>Iniciar Sesión</NavLink><br></br>
            <NavLink to='/register' className='boton'>Regístrese</NavLink>
          
        </nav>
      </header>

      <main>
        <section className="publicaciones">
          {/* Aquí puedes listar las últimas publicaciones académicas */}
        </section>
        <section className="busqueda">
          <input type="text" placeholder="Buscar publicaciones..." />
          <button>Buscar</button>
          <div className="separador">
            <div className="columna">
              <div className="contenido-columna">
                <p>Revistas</p>
              </div>
              <div className="cuadro-blanco">
                <div className="contenido-cuadro">
                  <h3>Revista #1:</h3>
                  <br />
                  <p></p>
                </div>
              </div>
            </div>
            <div className="columna">
              <div className="contenido-columna">
                <p>Documentos Científicos</p>
              </div>
              <div className="cuadro-blanco">
                <div className="contenido-cuadro">
                  <h3>Documento #1:</h3>
                  <br />
                  <p></p>
                </div>
              </div>
            </div>
            <div className="columna">
              <div className="contenido-columna">
                <p>Tesis</p>
              </div>
              <div className="cuadro-blanco">
                <div className="contenido-cuadro">
                  <h3>Tesis #1:</h3>
                  <br />
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
    <footer>
        <div className="pie">
          <p>Todos los derechos reservados &copy; Michael Castro 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
